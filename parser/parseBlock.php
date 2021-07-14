<?php
require_once("jsonRPCClient.php");
include("config.php");
include("functions.php");

//init redis
$redis = new Redis();
$redis->connect('127.0.0.1', 6379, 2.5); // 2.5 sec timeout.

//get redis lock
$lock = $redis->get("parserLock");
echo $lock; 
echo "\n";
//locked ? die
if ($lock !== false) {
    die();
} else {
    //auto unlock after 30 minutes
    $redis->set("parserLock", true, 1800);
}

//get current blockHeight in redis
$RedisBlockHeight = getFromRedis("blockheight");
echo "Block height\n";
echo $RedisBlockHeight; 
//get client block height
try {
    $HeightInClient = $peercoin->getblockcount();
} catch (Exception $e) {
    die($e->getMessage());
}

//write
while ($RedisBlockHeight <= $HeightInClient) {
    echo "\n $RedisBlockHeight - $HeightInClient \n";
    $CurrentBlockNumber = intval($RedisBlockHeight);

    //get block
    try {
        $BlockHash = $peercoin->getblockhash($CurrentBlockNumber);
        $Block = $peercoin->getblock($BlockHash);
    } catch (Exception $e) {
        die($e->getMessage());
    }

    //get foundby
    $BlockType = $Block["flags"];
    $FoundBy = "";
    if ($CurrentBlockNumber > 0) {
        if (strpos($BlockType, "proof-of-stake") !== false) {
            try {
                $txDecoded = $peercoin->getrawtransaction($Block["tx"][1], 1);
            } catch (Exception $e) {
                die($e->getMessage());
            }
            $hexString = $txDecoded["vout"][1]["scriptPubKey"]["asm"]; 
			$FoundBy = convertHexToAddress(explode(" ", $hexString)[0]);
        } else {
            try {
                $txDecoded = $peercoin->getrawtransaction($Block["tx"][0], 1);
            } catch (Exception $e) {
                die($e->getMessage());
            }
            if($txDecoded["vout"][0]["scriptPubKey"]["type"] === "pubkey") {
				$hexString = $txDecoded["vout"][0]["scriptPubKey"]["asm"]; 
			} else {
				$hexString = $txDecoded["vout"][1]["scriptPubKey"]["asm"]; 
			}
			$FoundBy = convertHexToAddress(explode(" ",$hexString)[0]);
        }
    }

    //write foundBy to redis
    writeToRedisList($FoundBy, $CurrentBlockNumber);

    //write block to  Redis
    writeToRedis("block:$CurrentBlockNumber", json_encode(array("time" => $Block["time"], "hash" => $Block["hash"], "flags" => $Block["flags"], "nTx" => $Block["nTx"])));

    //update blockheight
    writeToRedis("blockheight", $CurrentBlockNumber + 1);

    //read blockheight 
    $RedisBlockHeight = getFromRedis("blockheight");
}

//delete lock
$redis->del("parserLock");
