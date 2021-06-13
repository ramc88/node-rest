const login = require('../lib/login');
const User = require('../models/user');
const countries = require('./upsertFacebookCatalogs/countries');
const cities = require('./upsertFacebookCatalogs/cities');
const expats = require('./upsertFacebookCatalogs/expats');
const industries = require('./upsertFacebookCatalogs/industries');
const life_events = require('./upsertFacebookCatalogs/life_events');

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
  industries.upsertIndustries();
  life_events.upsertLifeEvents()
}

module.exports = {
  init,
};