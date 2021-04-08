const Arena = require('bull-arena');
const Bull = require('bull');
const bullQueues = require('./bullIntegration');

const allQueues = Object.keys(bullQueues.queuesList);

const allQueuesConfig = allQueues.map((val) => {
    return {
        name: val,
        hostId: "demography",
        redis: {
            url: global.config.redis,
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