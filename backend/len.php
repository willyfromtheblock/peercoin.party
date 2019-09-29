<?php
include("config.php");

$redisQuery = $redis->llen($_GET["address"]);
$answerArray = array("length" => $redisQuery);
print_r(json_encode($answerArray));
