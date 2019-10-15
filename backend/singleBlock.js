const tools = require("./tools/tools");

const singleBlock = async (fastify, options) => {
  fastify.get("/single/:block", async (request, reply) => {
    const { redis } = fastify;
    const { block } = request.params;
    let requestArray = [];

    requestArray.push("block:" + block);

    return await tools.getRedisMultiResult(redis, requestArray);
  });
};

module.exports = singleBlock;
