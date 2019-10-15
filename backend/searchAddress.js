const searchAddress = async (fastify, options) => {
  fastify.get("/search/:address", async (request, reply) => {
    const { redis } = fastify;
    const { address } = request.params;

    const length = await redis.llen(address);
    return { length };
  });
};

module.exports = searchAddress;
