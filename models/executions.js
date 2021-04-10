/* eslint-disable no-underscore-dangle */
const mongoose = require('mongoose');
const { Schema, ObjectId } = mongoose;

const Execution = new Schema({
  status: {
      type: Schema.Types.String,
  },
  config: {
    type: Object
  },
  recurrence: {
    type: Schema.Types.String,
  },
  projectId: {
    type: ObjectId, ref: 'projects'
  }
},
{
  timestamps: {createdAt: "createdAt"}
});

// schema.index({ bot: 1, version: 1, senderId: 1 }, { unique: true });

// schema.index({ senderId: 1 });

const ExecutionExp = mongoose.model('execution', Execution);
// Project.createIndexes();

module.exports = ExecutionExp;
