const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

const expect = chai.expect;
const mongoose = require('mongoose');

module.exports = {
    expect,
    connectDB: async() => {
        const connection = process.env.MONOG_URL;
        console.log({connection})
        await mongoose.connect(connection);
    }
};