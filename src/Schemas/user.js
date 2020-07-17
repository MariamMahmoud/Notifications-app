const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    language: {
        type: String,
        default: 'en'
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
