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

const loadJobs = async() => {
  const projectCtrl = require('../controllers/core/project')
  const allIds = (await projectCtrl.getAllByW({status: 'Active'})).map((val => val._id));
  allIds.forEach((id) => {
    projectCtrl.runProject(id);
  });
};

const init = async() => { 
  upsertMainUser();
  countries.upsertCountries();
  cities.upsertCities();
  expats.upsertExpats();
  loadJobs();
  industries.upsertIndustries();
  life_events.upsertLifeEvents()
}

module.exports = {
  init,
};