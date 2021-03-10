const fs = require('fs');

function init() {

  console.log(`${__dirname}/../config.json`, process.env.NODE_ENV);
  global.config = JSON.parse(process.env.CONFIG || fs.readFileSync(`${__dirname}/../config.json`, 'utf8'))[process.env.NODE_ENV || 'development'];

  console.log(global.config);
}

module.exports = {
  init,
};