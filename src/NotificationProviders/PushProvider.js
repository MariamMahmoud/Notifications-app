const admin = require('firebase-admin');
const Notifications = require('../Controller/notifications');

const serviceAccount = require('../config/notifications-app-bb3d5-firebase-adminsdk-eshik-91828459c1');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://notifications-app-bb3d5.firebaseio.com'
  });


class PushProvider extends BaseProvider {
    constructor() {
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

        } catch(error) {
            // TODO: log error
            Notifications.update(message, 'red');

            const err = {
                name: 'SMSProvider crashed',
                details: error.stack,
                message: error.message,
            }

            throw err;
        }
    }
}

module.exports = PushProvider;