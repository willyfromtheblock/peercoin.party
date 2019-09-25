<?php

function writeToRedis($key, $value)
{
    global $redis;
    $redis->set($key, $value);
}

function getFromRedis($key)
{
    global $redis;
    return $redis->get($key);
}
