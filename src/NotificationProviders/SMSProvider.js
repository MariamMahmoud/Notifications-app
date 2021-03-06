'use strict';

const Transport = require('bipsms');
const Notifications = require('../Controllers/notifications');
const BaseProvider = require('./BaseProvider');

const notifierConfig = {
	// real configuration
	// username: process.env.BIPSMS_USERNAME,
	// password: process.env.BIPSMS_PASSWORD,

	// fake config
	fake: true
};


class SMSProvider extends BaseProvider {
	constructor() {
		super();
		this.transport = new Transport(notifierConfig);
	}

	async notify(message) {
		try {
			const response = await this.transport.sendSingleSMS(this._formatMsg(message));
			Notifications.update(message, 'green');

			return response;
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

	_formatMsg(message) {
		return {
			from: 'SWVL SMS Service',
			to: message.users.phone,
			text: message.body
		};
	}
}

module.exports = SMSProvider;
