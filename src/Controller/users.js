'use strict';

let Users = require('../Models/user');

// TODO: add the rest of user crud operations
module.exports = {
    create: async user => await Users.create(user),
};
