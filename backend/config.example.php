<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
error_reporting(E_ERROR | E_WARNING | E_PARSE);
$redis = new Redis();
$redis->connect('127.0.0.1', 6379, 2.5); // 2.5 sec tximeout.
