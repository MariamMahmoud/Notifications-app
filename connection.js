const mongoose = require("mongoose");
const User = require("./src/Controller/user");
const connection = "mongodb://mongo:27017/notifications-db";

const connectDb = () => {
    return mongoose.connect(connection);
};

module.exports = connectDb;