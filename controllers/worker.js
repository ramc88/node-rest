const bullInt = require('./bullIntegration');



exports.start = async (app) => {
    const jobs = new Queue('jobs', kona.conf.redis);

    jobs.process(kona.conf.batchSize, async (job) => {
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

