'use strict';

const Transport = require('bipsms');
const notifierConfig = {
    // real configuration
    // username: process.env.BIPSMS_USERNAME,
    // password: process.env.BIPSMS_PASSWORD,

    // fake config
    fake: true
}


class SMSProvider extends BaseProvider {
    constructor() {
        this.transport = new Transport(notifierConfig);
    }

    async notifyOne(message) {
        return this._notify(message)
    }

    async notifyGroup(message) {
        return this._notify(message)
    }

    async _notify(message) {
        try {
            return await this.transport.sendSingleSMS(_formateMsg(message));
        } catch(error) {
            // TODO: log error
            const err = {
                name: 'SMSProvider crashed',
                details: error.stack,
                message: error.message,
            }

            throw err;
        }
    }

    _formatMsg(message) {
        return {
            from: 'SWVL SMS Service',
            to: message.users.phone,
            text: message.body
        }
    }
}

module.exports = SMSProvider;
