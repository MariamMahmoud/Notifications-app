'use strict';

let UserNotification = require('../Schemas/notification');

module.exports = {
    create: async (req, res) => {
        const newNotification = new Notification(req.body.notification);
        res.json(newNotification.save())
    },

    find: async (req, res) => {},

    update: async (req, res) => {
        const id = req.body.id;
        const notification = this.find({ _id: id });
    },

    delete: async (req, res) => {},

    getPendingNotifications: () =>
        this.find({ status: 'yellow'}),

    list: async (req,res) => {},

    getUserNotifications: async (req, res) => {}
};
