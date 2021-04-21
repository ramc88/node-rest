const startup = require('./startup');
const modulesConfig = require('./modules-config.json');

startup.config();
startup.sentry();
if (modulesConfig.coreService.enabled) startup.mongo();
if (modulesConfig.dbService.enabled) startup.mysql();
startup.services(modulesConfig);
if (modulesConfig.coreService.enabled) startup.upserts();

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

