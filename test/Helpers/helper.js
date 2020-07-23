const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

const expect = chai.expect;
const mongoose = require('mongoose');

module.exports = {
    expect,
    connectDB: async() => {
        const connection = 'mongodb://mongo:27017/notifications-test-db';
        await mongoose.connect(connection);
    }
};