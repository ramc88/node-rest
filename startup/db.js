const mongoose = require('mongoose');

function init() {
  const url = process.env.MONGO || global.config.db.mongo.url;

  mongoose.connect(
    url,
    {
      autoIndex: false,
      auto_reconnect: true,
      useNewUrlParser: true,
    },
  );

  mongoose.connection.on('error', (err) => {
    console.log(err);
  });

  mongoose.set('useFindAndModify', false);
  mongoose.set('debug', false);

  mongoose.connection.on('connected', () => {
    console.log('Mongoose default connection open');
  });
}

module.exports = {
  init,
};