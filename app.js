
const startup = require('./startup');
startup.config();
startup.sentry();
startup.db();
startup.services();
startup.upserts();

function happyEnding() {
  process.exit(0);
}

function sadEnding(err) {
  // eslint-disable-next-line no-console
  console.error(err);
  process.exit(1);
}

process.on('SIGINT', happyEnding);
process.on('SIGTERM', happyEnding);
process.on('uncaughtException', sadEnding);
process.on('unhandledRejection', sadEnding);
