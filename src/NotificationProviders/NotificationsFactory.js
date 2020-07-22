'use strict';

const { Sms , Push } = require('./index');

class NotificationsFactory {
    constructor() {
        this.smsProvider = new Sms();
        this.pushProvider = new Push();
    }

    getProvider(providerType) {
        if(providerType === 'sms') {
            return this.SMSProvider;
        } else if(providerType === 'push') {
            return this.pushProvider;
        } else {
            throw new Error('unsupported provider type');
        }
    }
}

const notificationsFactorySingleInstance = new NotificationsFactory();

module.exports = notificationsFactorySingleInstance;