'use strict';

let Notifications = require('../Models/notification');
const DEFAULT_LIMIT = process.env.SMS_LIMIT || 100;

// TODO: find red (failing) notifications for further retry
// TODO: find only active users to save sms cost from sending to inactive users
module.exports = {
	create: async notification => await Notifications.create(notification),

	findSMS: async () => await Notifications
		.find( { type: 'sms', status: 'yellow' })
		.populate({ path: 'users', select: 'phone' })
		.sort({created_at: -1})
		.limit(DEFAULT_LIMIT)
		.exec(),

	findPush: async () => await Notifications
		.find({ type: 'push', status: 'yellow' })
		.populate({ path: 'users', select: 'language' })
		.sort({created_at: -1})
		.exec(),

	update: async (notification, color) => {
		notification.status = color;

		return Notifications.updateOne(notification);
	},
};
