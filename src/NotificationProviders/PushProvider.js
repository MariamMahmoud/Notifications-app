'use strict';

const admin = require('firebase-admin');
const Notifications = require('../Controllers/notifications');
const BaseProvider = require('./BaseProvider');

const serviceAccount = require('../config/notifications-app-firebase-admin-config');
admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: 'https://notifications-app-bb3d5.firebaseio.com'
});


class PushProvider extends BaseProvider {
	constructor() {
		super();
		this.admin = admin;
	}

	async notify(message) {
		try {
			if(message.users.length == 1) {
				this.admin.messaging.send(message);
				return Notifications.update(message, 'green');
			} else {
				// TODO: notify many
			}
			return 'push notification';
		} catch(error) {
			// TODO: log error
			Notifications.update(message, 'red');

			const err = {
				name: 'SMSProvider crashed',
				details: error.stack,
				message: error.message,
			};

			throw err;
		}
	}

	// eslint-disable-next-line no-unused-vars
	_formatMsg(message) {
		// TODO: format message to match the provider's schema
	}
}

module.exports = PushProvider;
