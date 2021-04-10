const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const compress = require('compression');
const cors = require('cors');
const http = require('http');
const KRequest = require('k-request');
const helmet = require('helmet');
const mongooseMorgan = require('k-mongoose-morgan');

function init() {
  const app = express();
  const server = http.Server(app);

  // START WORKER
  //const jobWorker = require('../controllers/worker');
  //jobWorker.start(app);

  // k-request
  global.krequest = new KRequest(process.env.MONGO || global.config.db.mongo.url, 'outgoing');

  // The request handler must be the first middleware on the app
  app.use(global.Raven.requestHandler());
  
  var corsOptions = {
    methods: 'GET,PUT,POST,DELETE,OPTIONS',
    origin: '*',
    allowedHeaders: ['api_key', 'api-key', 'Content-Type', 'Authorization'],
    exposedHeaders: ['api_key', 'api-key', 'Content-Type', 'Authorization']
  };
  
  app.use(cors(corsOptions));

  app.use(compress());
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));

  app.use(helmet());
  // app.use(xss());

  app.use(
    mongooseMorgan({
      collection: 'morgan_logger',
      connectionString: process.env.MONGO || global.config.db.mongo.url,
    }, {
      skip: req => req.body && req.body.password,
      save: line => /^(POST|PUT)/.test(line),
    }),
  );

   // TODO middlewares
  app.use(require('../middlewares/auth'));

  app.use('/bullMonitor', require('../controllers/arenaConfig').arena);

  fs.readdirSync(`${__dirname}/../routes/`).forEach(function(file) {
    var routeName = file.split(".")[0];
    var route = '../routes/' + file;
    app.use('/' + routeName, require(route));
  });

  server.listen(process.env.PORT || 4000, (err) => {
    if (err) {
      throw err;
    }
    console.log(`listening on port ${process.env.PORT || 4000}`);
  });
}

module.exports = {
  init,
};