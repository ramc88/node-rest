const login = require('../lib/login');
const User = require('../models/user');
const countries = require('./upsertFacebookCatalogs/countries');
const cities = require('./upsertFacebookCatalogs/cities');
const expats = require('./upsertFacebookCatalogs/expats');

function upsertMainUser() {
  const user = {
    name: global.config.mainUser.name,
    email: global.config.mainUser.email,
    password: login.hashIt(global.config.mainUser.password),
    roles: [
      "ADMIN"
    ] 
  };

  User
    .findOneAndUpdate({ email: user.email }, user, { upsert: true, new: true })
    .exec((err, result) => {
      if (err) {
        console.log(err);
      }
      else {
        console.log('Usuario Admin Creado');
      }
      
      
    });
}



function init() { 
  upsertMainUser();
  countries.upsertCountries();
  cities.upsertCities();
  expats.upsertExpats();
}

module.exports = {
  init,
};