/* eslint-disable no-underscore-dangle */
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const { pre } = require('../lib/schema');

const { Schema, ObjectId } = mongoose;

const schema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
    ref: 'id',
  },
  catalog: {
      type: [Object],
  },
  type: {
    type: Schema.Types.String,
  },
  _createdAt: {
    type: Date,
  },
  _updatedAt: {
    type: Date,
  },
  _deletedAt: {
    type: Date,
  },
},
);

schema.plugin(uniqueValidator);

pre(schema);

module.exports = mongoose.model('facebook_catalog', schema);
