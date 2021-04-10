const bullInt = require('./bullIntegration');
const Queue = require('bull');
const fbApiJob = require('./jobs/fbApi');

exports.start = async (app) => {
  try {
    console.log('starting worker', global.config.redis)
    const jobs = new Queue('works', {redis: {port: global.config.redis.split(':')[1], host: global.config.redis.split(':')[0]}});

    jobs.process(global.config.batchSize, async (job) => {
      console.log('-----------PROCESSING JOB-----------');
        if (job.attemptsMade === 2) {
          job.data.log = job.failedReason;
          job.data.processing_status = 2;
          // console.log('JOB-->', job);
          await bullInt.addToQueue('works', job.data, { priority: 2 });
          await job.remove();
        } else {
          // eslint-disable-next-line no-undef
          return await fbApiJob.job(job.data.config); 
        };
        return {}
      });
    } catch (e) {
      console.log(e)
    }
}

