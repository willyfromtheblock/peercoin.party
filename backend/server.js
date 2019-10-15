"use strict";
require("make-promises-safe");

const fastify = require("fastify")({
  logger: true
});

fastify.register(require("fastify-rate-limit"), {
  max: 100,
  timeWindow: "30s"
});

fastify.register(require("fastify-redis"), { host: "127.0.0.1" });
fastify.register(require("./recentBlocks"));
fastify.register(require("./singleBlock"));
fastify.register(require("./searchAddress"));
fastify.register(require("./addressBlocks"));

fastify.listen(3000, "0.0.0.0", function(err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`server listening on ${address}`);
});
