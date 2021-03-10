/* eslint-disable no-underscore-dangle */
const mongoose = require('mongoose');
const { Schema, ObjectId } = mongoose;

const Project = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  name: {
      type: Schema.Types.String,
  },
  type: {
      type: Schema.Types.String,
  },
  status: {
      type: Schema.Types.String,
  },
  executions: [{type: ObjectId, ref: 'execution'}],
 
  description: {
      type: Schema.Types.String,
  },
  cron: {
      type: Schema.Types.String,
  },
  params: {
      type: Schema.Types.String,
  },
  tags: [{
    type: String,
  }],

  version: {
    type: Schema.Types.ObjectId,
    ref: 'version',
  }
},
{
  timestamps: {createdAt: "createdAt"}
});

// schema.index({ bot: 1, version: 1, senderId: 1 }, { unique: true });

// schema.index({ senderId: 1 });

const ProjectExp = mongoose.model('project', Project);
// Project.createIndexes();

module.exports = ProjectExp;
