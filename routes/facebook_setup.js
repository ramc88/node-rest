var express = require('express');
var router = express.Router();
const facebookSetupController = require('../controllers/facebook-setup');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource2');
});

router.get('/catalog',function(req,res,next){
  var type = req.query['type'];

  facebookSetupController.getFacebookCatalog(type)
  .then((result)=>{
    res.send(result);
  })
  .catch((err) =>{
    console.log(err);
    next();
  })
});

/*router.get('/geolocation/', function(req, res, next) {
  
  var type = req.query['geolocation_type'];
  var query = req.query['q'] ? req.query['q']:'';

  var access_token = 'EAAB2i4QKEp0BAHtL8So0ZC5WVuCevoHL7W9AKKzLvfz667N3s06YjjjCHWsoM0DmZCwRewPAR88Yso2CGZAYj1gnKoGoLXDRpUvn3JxGG7TVfddYsjB0ZAosrXCReU38DcKhQWL9WZBGCFA3HTZBv0gJrZAmGPVplzgJW1SbPNfHUFuCNLliPKUwDTtFAEYUU0ZD';
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
  
  var access_token = 'EAAB2i4QKEp0BAHtL8So0ZC5WVuCevoHL7W9AKKzLvfz667N3s06YjjjCHWsoM0DmZCwRewPAR88Yso2CGZAYj1gnKoGoLXDRpUvn3JxGG7TVfddYsjB0ZAosrXCReU38DcKhQWL9WZBGCFA3HTZBv0gJrZAmGPVplzgJW1SbPNfHUFuCNLliPKUwDTtFAEYUU0ZD';
  
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
  
  var access_token = 'EAAB2i4QKEp0BAHtL8So0ZC5WVuCevoHL7W9AKKzLvfz667N3s06YjjjCHWsoM0DmZCwRewPAR88Yso2CGZAYj1gnKoGoLXDRpUvn3JxGG7TVfddYsjB0ZAosrXCReU38DcKhQWL9WZBGCFA3HTZBv0gJrZAmGPVplzgJW1SbPNfHUFuCNLliPKUwDTtFAEYUU0ZD';
  
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

router.get('/lifeEvents/', function(req, res, next) {
  
  var access_token = 'EAAB2i4QKEp0BAHtL8So0ZC5WVuCevoHL7W9AKKzLvfz667N3s06YjjjCHWsoM0DmZCwRewPAR88Yso2CGZAYj1gnKoGoLXDRpUvn3JxGG7TVfddYsjB0ZAosrXCReU38DcKhQWL9WZBGCFA3HTZBv0gJrZAmGPVplzgJW1SbPNfHUFuCNLliPKUwDTtFAEYUU0ZD';
  
  var query = req.query && req.query['q'] ? req.query['q']:'';
  facebookSetupController.getFacebookLifeEvents(access_token,query)
  .then((result)=>{
    res.send(result);
  })
  .catch((err) =>{
    console.log(err);
    next();
  })
});

router.get('/industries/', function(req, res, next) {
  
  var access_token = 'EAAB2i4QKEp0BAHtL8So0ZC5WVuCevoHL7W9AKKzLvfz667N3s06YjjjCHWsoM0DmZCwRewPAR88Yso2CGZAYj1gnKoGoLXDRpUvn3JxGG7TVfddYsjB0ZAosrXCReU38DcKhQWL9WZBGCFA3HTZBv0gJrZAmGPVplzgJW1SbPNfHUFuCNLliPKUwDTtFAEYUU0ZD';
  
  var query = req.query && req.query['q'] ? req.query['q']:'';
  facebookSetupController.getFacebookIndustries(access_token,query)
  .then((result)=>{
    res.send(result);
  })
  .catch((err) =>{
    console.log(err);
    next();
  })
});

router.get('/familyStatus/', function(req, res, next) {
  
  var access_token = 'EAAB2i4QKEp0BAHtL8So0ZC5WVuCevoHL7W9AKKzLvfz667N3s06YjjjCHWsoM0DmZCwRewPAR88Yso2CGZAYj1gnKoGoLXDRpUvn3JxGG7TVfddYsjB0ZAosrXCReU38DcKhQWL9WZBGCFA3HTZBv0gJrZAmGPVplzgJW1SbPNfHUFuCNLliPKUwDTtFAEYUU0ZD';
  
  var query = req.query && req.query['q'] ? req.query['q']:'';
  facebookSetupController.getFacebookFamilyStatus(access_token,query)
  .then((result)=>{
    res.send(result);
  })
  .catch((err) =>{
    console.log(err);
    next();
  })
});

router.get('/userDevices/', function(req, res, next) {
  
  var access_token = 'EAAB2i4QKEp0BAHtL8So0ZC5WVuCevoHL7W9AKKzLvfz667N3s06YjjjCHWsoM0DmZCwRewPAR88Yso2CGZAYj1gnKoGoLXDRpUvn3JxGG7TVfddYsjB0ZAosrXCReU38DcKhQWL9WZBGCFA3HTZBv0gJrZAmGPVplzgJW1SbPNfHUFuCNLliPKUwDTtFAEYUU0ZD';
  
  var query = req.query && req.query['q'] ? req.query['q']:'';
  facebookSetupController.getFacebookUserDevices(access_token,query)
  .then((result)=>{
    res.send(result);
  })
  .catch((err) =>{
    console.log(err);
    next();
  })
});*/

module.exports = router;