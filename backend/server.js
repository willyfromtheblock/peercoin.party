"use strict";
require("make-promises-safe");

const Sentry = require("@sentry/node");
Sentry.init({
  dsn: "https://4aec9cdad3c64a10a17dfbae658a1304@sentry.io/1780732"
});

const fastify = require("fastify")({
  logger: true
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
