const chai = require('chai');
const expect = chai.expect;
const mongoose = require('mongoose');

module.exports = {
    expect,
    connectDB: async() => {
        const connection = 'mongodb://mongo:27017/notifications-test-db';
        await mongoose.connect(connection);
    }
};