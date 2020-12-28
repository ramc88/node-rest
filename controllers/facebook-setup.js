const request = require('request');

function getFacebookGeolocation(facebook_token,location_type,query) { 

  return new Promise((resolve, reject) => {
    const options = {
      url: `${global.conf.FACEBOOK_SEARCH_BASE_URL}/search?access_token=${facebook_token}&type=adgeolocation&location_types=['${location_type}']&limit=1000&q=${query}`
    };
    
    request.get(options, (err, response, body) => {
      if (err || !response || response.statusCode !== 200) {
        console.log(err);
         reject();
      }
      console.log(body);
      resolve(body);
    });
  });
}

module.exports = {
  getFacebookGeolocation
}