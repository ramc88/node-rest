const bullInt = require('./bullIntegration');
const Queue = require('bull');


exports.start = async (app) => {
    const jobs = new Queue('jobs', config.redis);

    jobs.process(config.batchSize, async (job) => {
        if (job.attemptsMade === 2) {
          job.data.log = job.failedReason;
          job.data.processing_status = 2;
          // console.log('JOB-->', job);
          await bullInt.addToQueue('jobs', job.data, { priority: 2 });
          await job.remove();
        } else {
          // eslint-disable-next-line no-undef
          // DO SOMETHING, JOB LOGIC GOES HERE
          
        }
      });
}

