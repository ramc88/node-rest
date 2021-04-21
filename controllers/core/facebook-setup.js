const request = require('request');
const FacebookCatalog = require('../../models/facebook_catalog');

function getFacebookCatalog(type) {
  return new Promise((resolve, reject) => {
    FacebookCatalog
    .where({type})
    .sort({})
    .findOne()
    .exec((err, result) => {
      if (err) {
        reject(err)
      }
      resolve(result);
    });
  });
  
}

function getFacebookGeolocation(facebook_token,location_type,query) { 

  return new Promise((resolve, reject) => {
    const options = {
      url: `${global.conf.FACEBOOK_SEARCH_BASE_URL}/search?access_token=${facebook_token}&type=adgeolocation&location_types=['${location_type}']&limit=1000&q=${query}`
    };
    
    request.get(options, (err, response, body) => {
      if (err || !response || response.statusCode !== 200) {
        console.log(err);
        console.log(response.statusCode);
        console.log(body);
         return reject();
      }
      var result = JSON.parse(body);
      if(result && result.data && location_type!='city')
        result.data = result.data.sort((a, b) => (a.name > b.name) ? 1 : -1);
      resolve(result);
    });
  });
}

function getFacebookBehaviors(facebook_token,query) { 

  return new Promise((resolve, reject) => {
    const options = {
      url: `${global.conf.FACEBOOK_SEARCH_BASE_URL}/search?access_token=${facebook_token}&type=adTargetingCategory&class=behaviors&limit=1000&q=${query}`
    };
    
    request.get(options, (err, response, body) => {
      if (err || !response || response.statusCode !== 200) {
        console.log(err);
         return reject();
      }
      var result = JSON.parse(body);
      result.data = result.data.sort((a, b) => (a.name > b.name) ? 1 : -1);
      
      resolve(result);
    });
  });
}

function getFacebookInterests(facebook_token,query) { 
  var url = '';
  if(query && query!='')
    url = `${global.conf.FACEBOOK_SEARCH_BASE_URL}/search?access_token=${facebook_token}&type=adinterest&limit=1000&q=${query}`
  else
    url= `${global.conf.FACEBOOK_SEARCH_BASE_URL}/search?access_token=${facebook_token}&type=adTargetingCategory&class=interests&limit=1000`
  
  console.log('url',url);
    return new Promise((resolve, reject) => {
    const options = {
      url 
    };
    
    request.get(options, (err, response, body) => {
      if (err || !response || response.statusCode !== 200) {
        console.log(err);
         return reject();
      }
      var result = JSON.parse(body);
      result.data = result.data.sort((a, b) => (a.name > b.name) ? 1 : -1);
      
      resolve(result);
    });
  });
}

function getFacebookInterests(facebook_token,query) { 
  var url = '';
  if(query && query!='')
    url = `${global.conf.FACEBOOK_SEARCH_BASE_URL}/search?access_token=${facebook_token}&type=adinterest&limit=1000&q=${query}`
  else
    url= `${global.conf.FACEBOOK_SEARCH_BASE_URL}/search?access_token=${facebook_token}&type=adTargetingCategory&class=interests&limit=1000`
  
  console.log('url',url);
    return new Promise((resolve, reject) => {
    const options = {
      url 
    };
    
    request.get(options, (err, response, body) => {
      if (err || !response || response.statusCode !== 200) {
        console.log(err);
         return reject();
      }
      var result = JSON.parse(body);
      result.data = result.data.sort((a, b) => (a.name > b.name) ? 1 : -1);
      
      resolve(result);
    });
  });
}

function getFacebookLifeEvents(facebook_token,query) { 

  return new Promise((resolve, reject) => {
    const options = {
      url: `${global.conf.FACEBOOK_SEARCH_BASE_URL}/search?access_token=${facebook_token}&type=adTargetingCategory&class=life_events&limit=1000&q=${query}`
    };
    
    request.get(options, (err, response, body) => {
      if (err || !response || response.statusCode !== 200) {
        console.log(err);
         return reject();
      }
      var result = JSON.parse(body);
      result.data = result.data.sort((a, b) => (a.name > b.name) ? 1 : -1);
      
      resolve(result);
    });
  });
}

function getFacebookIndustries(facebook_token,query) { 

  return new Promise((resolve, reject) => {
    const options = {
      url: `${global.conf.FACEBOOK_SEARCH_BASE_URL}/search?access_token=${facebook_token}&type=adTargetingCategory&class=industries&limit=1000&q=${query}`
    };
    
    request.get(options, (err, response, body) => {
      if (err || !response || response.statusCode !== 200) {
        console.log(err);
         return reject();
      }
      var result = JSON.parse(body);
      result.data = result.data.sort((a, b) => (a.name > b.name) ? 1 : -1);
      
      resolve(result);
    });
  });
}

function getFacebookFamilyStatus(facebook_token,query) { 

  return new Promise((resolve, reject) => {
    const options = {
      url: `${global.conf.FACEBOOK_SEARCH_BASE_URL}/search?access_token=${facebook_token}&type=adTargetingCategory&class=family_statuses&limit=1000&q=${query}`
    };
    
    request.get(options, (err, response, body) => {
      if (err || !response || response.statusCode !== 200) {
        console.log(err);
         return reject();
      }
      var result = JSON.parse(body);
      result.data = result.data.sort((a, b) => (a.name > b.name) ? 1 : -1);
      
      resolve(result);
    });
  });
}

function getFacebookUserDevices(facebook_token,query) { 

  return new Promise((resolve, reject) => {
    const options = {
      url: `${global.conf.FACEBOOK_SEARCH_BASE_URL}/search?access_token=${facebook_token}&type=adTargetingCategory&class=user_device&limit=1000&q=${query}`
    };
    
    request.get(options, (err, response, body) => {
      if (err || !response || response.statusCode !== 200) {
        console.log(err);
         return reject();
      }
      var result = JSON.parse(body);
      result.data = result.data.sort((a, b) => (a.name > b.name) ? 1 : -1);
      
      resolve(result);
    });
  });
}

module.exports = {
  getFacebookGeolocation,
  getFacebookBehaviors,
  getFacebookInterests,
  getFacebookLifeEvents,
  getFacebookIndustries,
  getFacebookFamilyStatus,
  getFacebookUserDevices,

  getFacebookCatalog

}