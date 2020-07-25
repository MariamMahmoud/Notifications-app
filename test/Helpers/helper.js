const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

const expect = chai.expect;
const mongoose = require('mongoose');

module.exports = {
    expect,
    connectDB: async() =>
        await mongoose.connect('mongodb://localhost:27017/notifications-test-db'),
};