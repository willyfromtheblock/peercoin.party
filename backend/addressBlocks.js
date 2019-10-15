const tools = require("./tools/tools");

const singleBlock = async (fastify, options) => {
  fastify.get("/addressBlocks/:address/:scroll", async (request, reply) => {
    const { redis } = fastify;
    const { address, scroll } = request.params;

    let requestArray = [];

    const redisBlocks = await redis.lrange(
      address,
      scroll,
      parseInt(scroll) + 14
    );

    redisBlocks.forEach(block => {
      requestArray.push("block:" + block);
    });

    return await tools.getRedisMultiResult(redis, requestArray);
  });
};

module.exports = singleBlock;
