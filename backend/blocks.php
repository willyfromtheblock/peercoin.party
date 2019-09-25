<?php
include("functions.php");
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: http://localhost:3000");

//init redis
$redis = new Redis();
$redis->connect('127.0.0.1', 6379, 2.5); // 2.5 sec tximeout.

//get blockheight
$redisHeight = $redis->get("blockheight");

//parse scroll
if ($_GET["scroll"] || $_GET["scroll"] === "0" && $_GET["single"] === "true") {
    $selectedHeight = $_GET["scroll"];
} else {
    $selectedHeight = $redisHeight - 1;
}

if ($_GET["single"] === "true") {
    $answer = $redis->get("block:" . $selectedHeight);
    $index = str_replace("block:", "", $answer);
    $answerArray[] = array($selectedHeight => json_decode($answer));
} else {
    //get 20 blocks
    $answerArray = array();
    $requestArray = array();

    for ($x = 0; $x < 15; $x++) {
        if ($selectedHeight - $x >= 0) {
            $requestArray[] = "block:" . ($selectedHeight - $x);
        }
    }
    $redisMultiAnswer = $redis->mget($requestArray);

    foreach ($redisMultiAnswer as $key => $answer) {
        $index = str_replace("block:", "", $requestArray[$key]);
        $answerArray[] = array($index => json_decode($answer));
    }
}

//answer
print_r(json_encode($answerArray));
