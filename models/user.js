const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const { pre } = require('../lib/schema');

const { Schema } = mongoose;

const schema = new Schema({
  
  // general
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    dropDups: true,
  },
  
  password: {
    type: String,
    required: true,
  },
  roles: [{
    type: String,
  }],

  _createdAt: {
    type: Date,
  },
  _updatedAt: {
    type: Date,
  },
  _deletedAt: {
    type: Date,
  },
});

schema.plugin(uniqueValidator);

pre(schema);

module.exports = mongoose.model('user', schema);