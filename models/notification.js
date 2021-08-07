const mongoose = require('mongoose');
const { Schema, ObjectId } = mongoose;

const Notification = new Schema({
    user: {
        type: Schema.Types.ObjectId,
    },
    title: {
        type: Schema.Types.String,
    },
    text: {
        type: Schema.Types.String,
    },
    status: {
        type: Schema.Types.String,
    },
    
    project: {
        type: Schema.Types.String,
    },
  },
  {
    timestamps: {createdAt: "createdAt"}
  });
  
  
  const NotificationExp = mongoose.model('notification', Notification);
  
  module.exports = NotificationExp;