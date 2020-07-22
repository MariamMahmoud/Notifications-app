'use strict'

const notificationsFactoryInstance = require('../NotificationProviders/NotificationsFactory');
const Notifications = require('../Controllers/notifications');

module.exports = async () => {
    const notifications = flat([await Notifications.findSMS(), await Notification.findPush()]);

    try {
        notifications.forEach(async notification => {
            let notifier = notificationsFactoryInstance.getProvider(notification.type);
            await notifier.notify(notification);
        });

        return 'Users notified successfully'
    } catch(error) {
        // TODO: log error
        const err = {
            name: 'Notifier service crashed',
            details: error.stack,
            message: error.message,
        }

        throw err;
    }

};
