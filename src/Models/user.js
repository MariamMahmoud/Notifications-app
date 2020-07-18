'use strict';

const mongoose = require('mongoose');

// TODO: add the rest of needed user data (such as email, active flag ...etc)
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
    },
    language: {
        type: String,
        default: 'en'
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
