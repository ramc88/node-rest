const bullInt = require('./bullIntegration');
const Queue = require('bull');
// const fbApiJob = require('./jobs/fbApi');
const pm2Manager = require('./pm2Manager');
const socketConfig = {
  server: 'ws://localhost:4000/'
}
const currentFbBaseUrl = 'https://graph.facebook.com/v9.0';

exports.start = async (app) => {
  try {
    console.log('starting worker', global.config.redis)
    const jobs = new Queue('works', {redis: {port: global.config.redis.split(':')[1], host: global.config.redis.split(':')[0]}});

    jobs.process(global.config.batchSize, async (job) => {
      console.log('-----------PROCESSING JOB-----------', job.data);
      if (job.attemptsMade === 2) {
        job.data.log = job.failedReason;
        job.data.processing_status = 2;
        // console.log('JOB-->', job);
        await bullInt.addToQueue('works', job.data, { priority: 2 });
        await job.remove();
      } else {
        // eslint-disable-next-line no-undef
        if (job.data.type === 'Facebook') {
          const exeParams = {
            file: `${__dirname}/jobs/fbApi.js`,
            name: `Execution-${job.data._id}`,
            args: [JSON.stringify(job.data.config),
              currentFbBaseUrl,
              JSON.stringify(socketConfig),
              job.data._id]
          };
          return await pm2Manager.createProcess(exeParams);
        }
      };
      return {}
    });
  } catch (e) {
    console.log(e)
  }
};