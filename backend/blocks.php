<?php
include("config.php");
include("functions.php");

//get blockheight
$redisHeight = $redis->get("blockheight");

//parse scroll
if ($_GET["address"] && $_GET["scroll"] || $_GET["address"] && $_GET["scroll"] === "0") {
    $address = $_GET["address"];
    $selectedHeight = $_GET["scroll"];
} else if ($_GET["scroll"] || $_GET["scroll"] === "0" && $_GET["single"] === "true") {
    $selectedHeight = $_GET["scroll"];
} else {
    $selectedHeight = $redisHeight - 1;
}

//parse
if ($_GET["single"] === "true") {
    $answer = $redis->get("block:" . $selectedHeight);
    $index = str_replace("block:", "", $answer);
    $answerArray[] = array($selectedHeight => json_decode($answer));
} else if ($_GET["address"]) {
    $listAnswer = $redis->lrange($address, $selectedHeight, $selectedHeight + 14);
    $requestArray = array();

    foreach ($listAnswer as $block) {
        $requestArray[] = "block:" . $block;
    }
} else {
    //get 20 blocks
    $requestArray = array();

    for ($x = 0; $x < 15; $x++) {
        if ($selectedHeight - $x >= 0) {
            $requestArray[] = "block:" . ($selectedHeight - $x);
        }
    }
}

//form answer
$redisMultiAnswer = $redis->mget($requestArray);

foreach ($redisMultiAnswer as $key => $answer) {
    $index = str_replace("block:", "", $requestArray[$key]);
    $answerArray[] = array($index => json_decode($answer));
}
//answer
print_r(json_encode($answerArray));
