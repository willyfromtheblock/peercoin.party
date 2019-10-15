const getRedisMultiResult = async (redis, requestArray) => {
  let answerObj = [];

  const redisMultiResult = await redis.mget(requestArray);
  redisMultiResult.forEach((answer, key) => {
    const index = requestArray[key].replace("block:", "");
    answerObj.push({ [index]: JSON.parse(answer) });
  });

  return answerObj;
};

module.exports = {
  getRedisMultiResult: (redis, requestArray) => {
    return getRedisMultiResult(redis, requestArray);
  }
};
