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
    title: {
        type: String,
        default: 'Our beloved Swvl Customer',
    },
    body: {
        type: String,
        required: true
    },
    token: {
        type: String,
    },
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    },
});

const Notification = mongoose.model("Notification", notificationSchema);

module.exports = Notification;
