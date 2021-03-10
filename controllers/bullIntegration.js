// eslint-disable-next-line import/no-unresolved

const { setQueues } = require('bull-board');
const Queue = require('bull');

const jobs = new Queue('jobs', config.redis);

const queuesList = {};

queuesList.jobs = jobs;


setQueues(Object.values(queuesList));

exports.addToQueue = async (queueName, data, opts) => {
  // console.log('bull 12: ', queuesList[queueName]);
  let jobOpts = {};
  Object.assign(jobOpts, opts);
  jobOpts.attempts = jobOpts.attempts ? jobOpts.attempts : 2;
  jobOpts.removeOnComplete = (jobOpts.removeOnComplete === false) ? jobOpts.removeOnComplete : true;
  jobOpts.removeOnFail = (jobOpts.removeOnFail === false) ? jobOpts.removeOnFail : true;
  if (queuesList[queueName]) return queuesList[queueName].add(data, jobOpts);
};

exports.addToQueueBulk = async (queueName, dataList) => {
  console.log('line 28 bull', queueName);
  if (queuesList[queueName]) {
    console.log('line 20 bull');
    // eslint-disable-next-line max-len
    await queuesList[queueName].addBulk(dataList);
  } else {
    console.log('queue not found');
  }
};

exports.removeFromQueue = async (queueName, jobId) => {
  if (queuesList[queueName]) {
    console.log('line 20 bull');
    // eslint-disable-next-line max-len
    await queuesList[queueName].addBulk(dataList);
  } else {
    console.log('queue not found');
  }
};

// codigo para emitir eventos cuando un job es terminado
// myFirstQueue.on('completed', (job, result) => {
//     console.log(`Job completed with result ${result}`);
//   })