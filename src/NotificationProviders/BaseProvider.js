const SMSProvider = require('./SMSProvider');
const PushProvider = require('./PushProvider');
// TODO: add bulkNotify feature (different messages to different users)

class NotificationsProvider {

    constructor() {}

    getProvider(providerType) {
        if(providerType === 'sms') {
            return new SMSProvider(this.config);
        } else if(providerType === 'push') {
            return new PushProvider(this.config);
        } else {
            throw new Error('unsupported provider type');
        }
    }

    notify() {
        throw new Error('Provider must implement a notify method');
    }
}

module.exports = NotificationsProvider;