const router = require('express').Router();
const mongoSanitize = require('express-mongo-sanitize');
const crypto = require('crypto');
const validator = require('is-my-json-valid');

const User = require('../models/user');
const login = require('../lib/login');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('all users');
});

router.post('/login', mongoSanitize());
router.post('/login', function(req, res, next) {
  loginValidator(req.body);
  if (loginValidator.errors) {
    return res.status(400).send(loginValidator.errors);
  }
  
  return User
    .findOne({ email: req.body.email})
    .exec((err, user) => {
      if (err) {
        return next(err);
      }
      // eslint-disable-next-line no-underscore-dangle
      if (!user || user.deletedAt) {
        return res.sendStatus(400);
      }
      
      if (login.hashIt(req.body.password) !== user.password) {
        return res.sendStatus(400);
      }
      
      return res.status(200).send({
        // eslint-disable-next-line no-underscore-dangle
        token: login.sign(user._id.toString()),
        email: user.email,
        name: user.name,
        user: {
          _id: user._id,
          email: user.email,
          name: user.name,
        }
      });
    });

});

const loginValidator = validator({
  type: 'object',
  additionalProperties: true,
  properties: {
    email: {
      type: 'string',
      required: true,
    },
    password: {
      type: 'string',
      required: true,
    },
  },
}, {
  formats: {
  },
  verbose: true,
});

module.exports = router;
