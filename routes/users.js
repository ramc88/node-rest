const router = require('express').Router();
const mongoSanitize = require('express-mongo-sanitize');
const crypto = require('crypto');
const validator = require('is-my-json-valid');
const Qs = require('qs');
const User = require('../models/user');
const login = require('../lib/login');


router.get('/', (req, res, next) => {
  const q = (req.qs) ? Qs.parse(req.qs) : {};
  req.where = q.where || {};
  req.q = q;
  User
    .where(req.where)
    .limit(parseInt(req.q.limit || '1000', 10))
    .skip(parseInt(req.q.offset || '0', 10))
    .sort()
    .find()
    .select('-password')
    .exec((err, result) => {
      if (err) {
        return next(err);
      }
      return res.send(result);
    });
});

router.post('/', (req, res, next) => {
  
  req.body.password = login.hashIt(req.body.password);
  return User
    .findOne({ email: req.body.email })
    .exec((err1, found) => {
      if (err1) {
        global.Raven.captureException(err1);
        return res.sendStatus(500);
      }
      if (found) {
        return res.status(400).send({ error: 'email already in use' });
      }
      
      return new User(req.body)
        .save((err3, result) => {
          if (err3) {
            global.Raven.captureException(err3);
            console.log(err3);
            return next(err3);
          }
          // eslint-disable-next-line no-param-reassign
          delete result.password;
          return res.status(201).send(result);
        });
      
    });
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
          roles : user.roles
        }
      });
    });

});

router.get('/:id', (req, res, next) => {
  const query = {
    _id: req.params.id
  };
  
  return User
    .findOne(query)
    .select('-password')
    .exec((err, result) => {
      if (err) {
        return next(err);
      }
      return res.status(200).send(result);
    });
});

router.put('/:id', (req, res, next) => {
  const query = {
    _id: req.params.id
  };
  
  if (req.body.password && req.body.password !=="") {
    req.body.password = login.hashIt(req.body.password);
  }
  
  return User.findOneAndUpdate(query, req.body, { new: true })
    .exec((err, result) => {
      if (err) {
        return next(err);
      }
      if (result) {
        // eslint-disable-next-line no-param-reassign
        delete result.password;
        return res.status(200).send(result);
      }
      return res.sendStatus(404);
    });
});

router.delete('/:id', (req, res, next) => {
  const query = {
    _id: req.params.id,
  };
  
  return User
    .findOneAndUpdate(query, { _deletedAt: new Date() }, { new: true })
    .exec((err, result) => {
      if (err) {
        return next(err);
      }
      if (result) {
        // eslint-disable-next-line no-param-reassign
        delete result.password;
        return res.status(200).send(result);
      }
      return res.sendStatus(404);
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
