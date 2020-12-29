var express = require('express');
var router = express.Router();
const facebookSetupController = require('../controllers/facebook-setup');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource2');
});

router.get('/geolocation/', function(req, res, next) {
  
  var type = req.query['geolocation_type'];
  var query = req.query['q'] ? req.query['q']:'';

  var access_token = 'EAAB2i4QKEp0BACsMRCfxV2ul45X291SocBPOYaXGxeGaqsrWl4La2ByRPn1ZArr1ZCQZCnzwe9WMRqvrvuzEI9W7PIMwkP1h2khaT82XerAV0roOoqZAaqDDfcThFre7ZCTYYcLrZCeNK3SHcUFVxN7lX1WoqmsfZAkTn1zURkqZCwZDZD';
  facebookSetupController.getFacebookGeolocation(access_token,type,query)
  .then((result)=>{
    res.send(result);
  })
  .catch((err) =>{
    console.log(err);
    next();
  })
});

router.get('/behaviors/', function(req, res, next) {
  
  var access_token = 'EAAB2i4QKEp0BACsMRCfxV2ul45X291SocBPOYaXGxeGaqsrWl4La2ByRPn1ZArr1ZCQZCnzwe9WMRqvrvuzEI9W7PIMwkP1h2khaT82XerAV0roOoqZAaqDDfcThFre7ZCTYYcLrZCeNK3SHcUFVxN7lX1WoqmsfZAkTn1zURkqZCwZDZD';
  
  var query = req.query && req.query['q'] ? req.query['q']:'';
  facebookSetupController.getFacebookBehaviors(access_token,query)
  .then((result)=>{
    res.send(result);
  })
  .catch((err) =>{
    console.log(err);
    next();
  })
});

router.get('/interests/', function(req, res, next) {
  
  var access_token = 'EAAB2i4QKEp0BACsMRCfxV2ul45X291SocBPOYaXGxeGaqsrWl4La2ByRPn1ZArr1ZCQZCnzwe9WMRqvrvuzEI9W7PIMwkP1h2khaT82XerAV0roOoqZAaqDDfcThFre7ZCTYYcLrZCeNK3SHcUFVxN7lX1WoqmsfZAkTn1zURkqZCwZDZD';
  
  var query = req.query && req.query['q'] ? req.query['q']:'';

  console.log('query',query);
  facebookSetupController.getFacebookInterests(access_token,query)
  .then((result)=>{
    res.send(result);
  })
  .catch((err) =>{
    console.log(err);
    next();
  })
});

module.exports = router;