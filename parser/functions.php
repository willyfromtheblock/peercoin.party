<?php

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
