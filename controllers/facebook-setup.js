const request = require('request');

function getFacebookGeolocation(facebook_token,location_type,query) { 

  return new Promise((resolve, reject) => {
    const options = {
      url: `${global.conf.FACEBOOK_SEARCH_BASE_URL}/search?access_token=${facebook_token}&type=adgeolocation&location_types=['${location_type}']&limit=1000&q=${query}`
    };
    
    request.get(options, (err, response, body) => {
      if (err || !response || response.statusCode !== 200) {
        console.log(err);
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

module.exports = {
  getFacebookGeolocation,
  getFacebookBehaviors,
  getFacebookInterests
}