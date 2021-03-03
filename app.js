var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fs = require('fs');
var compress = require('compression');
var cors = require('cors');
const mongoose = require('mongoose');


// READ config and set global
var conf = JSON.parse(fs.readFileSync('./config.json', 'utf8'))[process.env.NODE_ENV || 'development'];
console.log(conf);

global.__base = __dirname + '/';
global.conf = conf;

// START DATABASE
const url = process.env.MONGO || conf.db.mongo.url;

mongoose.connect(
  url,
  {
    autoIndex: false,
    auto_reconnect: true,
    useNewUrlParser: true,
  },
);

mongoose.connection.on('error', (err) => {
  console.error(err);
});

mongoose.set('useFindAndModify', false);
mongoose.set('debug', false);

mongoose.connection.on('connected', () => {
  console.log('Mongoose default connection open');
});


// START WORKER
const jobWorker = require('./controllers/worker');
jobWorker.start(app);

var app = express();

var corsOptions = {
  methods: 'GET,PUT,POST,DELETE,OPTIONS',
  origin: '*',
  allowedHeaders: ['api_key', 'api-key', 'Content-Type', 'Authorization'],
  exposedHeaders: ['api_key', 'api-key', 'Content-Type', 'Authorization']
};

app.use(cors(corsOptions));

app.use(compress());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Add routes
fs.readdirSync('./routes/').forEach(function (file) {
  var routeName = file.split(".")[0];
  var route = './routes/' + file;
  app.use('/' + routeName, require(route));
});

// catch 404 and forward to error handler
/*app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
*/
var server = app.listen(3000);

module.exports = app;
