const SMSProvider = require('./SMSProvider');
const PushProvider = require('./PushProvider');

class NotificationsProvider {

    constructor() {
    }

    getProvider(providerType) {
        if(providerType === 'sms') {
            return new SMSProvider(this.config);
        } else if(providerType === 'push') {
            return new PushProvider(this.config);
        } else {
            throw new Error('unsupported provider type');
        }
    }

    notifyOne() {
        throw new Error('Provider must implement a notifyOne method');
    }


    notifyGroup() {
        throw new Error('Provider must implement a notifyGroup method');
    }
}

module.exports = NotificationsProvider;