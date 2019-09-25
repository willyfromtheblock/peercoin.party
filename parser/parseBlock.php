<?php
require_once("jsonRPCClient.php");
include("config.php");
include("functions.php");

//init redis
$redis = new Redis();
$redis->connect('127.0.0.1', 6379, 2.5); // 2.5 sec timeout.

//get current blockHeight in redis
$RedisBlockHeight = getFromRedis("blockheight");

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

    //write to Redis
    writeToRedis("block:$CurrentBlockNumber", json_encode(array("time" => $Block["time"], "hash" => $Block["hash"], "flags" => $Block["flags"])));

    //update blockheight
    writeToRedis("blockheight", $CurrentBlockNumber + 1);

    //read blockheight 
    $RedisBlockHeight = getFromRedis("blockheight");
}
