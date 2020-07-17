'use strict';

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const notificationSchema = new Schema({
    user_ids: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    type: {
        type: String,
        enum: ['sms','push']
    },
    status: {
        type: String,
        enum: ['green', 'red', 'yellow'],
        default: 'yellow',
    },
    body: {
        type: String,
        required: true
    },

});

const Notification = mongoose.model("Notification", notificationSchema);

module.exports = Notification;
