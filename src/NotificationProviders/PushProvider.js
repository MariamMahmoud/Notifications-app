const admin = require('firebase-admin');

const serviceAccount = require('../config/notifications-app-bb3d5-firebase-adminsdk-eshik-91828459c1.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://notifications-app-bb3d5.firebaseio.com'
  });


class PushProvider extends BaseProvider {
    constructor() {
        this.admin = admin;
    }

    async notifyOne(message) {
        try {
            return this.admin.messaging.send(message);
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

    async notifyMany(message) {}
}

module.exports = PushProvider;