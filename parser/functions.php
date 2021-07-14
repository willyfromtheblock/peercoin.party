<?php
require "bitcoin-php/vendor/autoload.php";
use BitWasp\Bitcoin\Bitcoin;
use BitWasp\Bitcoin\Key\Factory\PublicKeyFactory;
use BitWasp\Bitcoin\Address\AddressCreator;
use BitWasp\Bitcoin\Network\NetworkFactory;
use BitWasp\Bitcoin\Key\KeyToScript\Factory\P2pkhScriptDataFactory; 

function writeToRedis($key, $value)
{
    global $redis;
    $redis->set($key, $value);
}

function writeToRedisList($key, $value)
{
    global $redis;
    $redis->lpush($key, $value);
}

function getFromRedis($key)
{
    global $redis;
    return $redis->get($key);
}

function getFromRedisList($key)
{
    global $redis;
    return $redis->lrange($key, 0, -1);
}

function convertHexToAddress($hex) {
	$pubKeyFactory = new PublicKeyFactory();
	$network =  NetworkFactory::peercoin();
	
	$publicKey = $pubKeyFactory->fromHex($hex);
	$addrCreator = new AddressCreator();
	$factory = new P2pkhScriptDataFactory();
	$scriptPubKey = $factory->convertKey($publicKey)->getScriptPubKey();
	$address = $addrCreator->fromOutputScript($scriptPubKey); 
	return $address->getAddress($network);
}