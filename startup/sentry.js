global.Raven = require('raven');

function init() {
  if (global.config.raven) {
    global.Raven.config(global.config.raven).install();
  }
}

module.exports = {
  init,
};
