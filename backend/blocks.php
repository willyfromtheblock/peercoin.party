<?
include("functions.php");

//init redis
$redis = new Redis();
$redis->connect('127.0.0.1', 6379, 2.5); // 2.5 sec timeout.

//get blockheight
echo $redis->get("blockheight");
