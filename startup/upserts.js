const login = require('../lib/login');
const User = require('../models/user');

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
      console.log('Usuario Admin Creado');
      
    });
}

function init() { 
  upsertMainUser();
}

module.exports = {
  init,
};