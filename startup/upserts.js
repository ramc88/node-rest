const login = require('../lib/login');
const User = require('../models/user');
const countries = require('./upsertFacebookCatalogs/countries');
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
  expats.upsertExpats();
  loadJobs();
}

module.exports = {
  init,
};