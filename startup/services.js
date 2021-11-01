const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const compress = require('compression');
const cors = require('cors');
const http = require('http');

function init() {
  const app = express();
  const server = http.Server(app);


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

  // TODO middlewares
  app.use(require('../middlewares/auth'));

  fs.readdirSync(`${__dirname}/../routes`).forEach(function (file) {
    var routeName = file.split(".")[0];
    var route = `../routes/${file}`;
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