const Arena = require('bull-arena');
const Bull = require('bull');
const bullQueues = require('./bullIntegration');

const allQueues = bullIntegration.queuesList.keys();

const allQueuesConfig = allQueues.map((val) => {
    return {
        name: val,
        hostId: "demography",
        redis: {
            url: global.config.redis,
        },
    };
});

Arena({
  Bull,
  queues: allQueuesConfig,
});