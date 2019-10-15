const tools = require("./tools/tools");

const recentBlocks = async (fastify, options) => {
  fastify.get("/recent/:scroll", async (request, reply) => {
    const { redis } = fastify;
    const { scroll } = request.params;
    const redisHeight = await redis.get("blockheight");

    //build request array
    const selectedHeight = scroll === "0" ? redisHeight - 1 : scroll;

    let requestArray = [];

    for (let x = 0; x < 15; x++) {
      if (selectedHeight - x >= 0) {
        requestArray.push("block:" + (selectedHeight - x));
      }
    }
    return await tools.getRedisMultiResult(redis, requestArray);
  });
};

module.exports = recentBlocks;
