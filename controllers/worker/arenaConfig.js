const Arena = require('bull-arena');
const Bull = require('bull');
const bullQueues = require('../../lib/bullIntegration');

const allQueues = Object.keys(bullQueues.queuesList);

const allQueuesConfig = allQueues.map((val) => {
    return {
        name: val,
        hostId: "demography",
        redis: {
            host: global.config.redis.split(':')[0],
            port: global.config.redis.split(':')[1]
        },
    };
});

const arena = Arena({
  Bull,
  queues: allQueuesConfig,
});

module.exports = {
    arena,
};