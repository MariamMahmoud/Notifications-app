'use strict'

const baseProvider = require('../NotificationProviders/BaseProvider');
const Notifications = require('../Controller/notifications');

const _notifySMS = async(provider, notifications) => {
    const smsNotifier = provider.getProvider('sms');

    for await (let smsNotification of notification) {
        smsNotifier.notify(smsNotification)
    }
};

const _notifyPush = async(provider, notifications) => {
    const pushNotifier = provider.getProvider('push');

    for await (let pushNotification of notifications) {
        pushNotifier.notify(pushNotification)
    }

};

module.exports = async () => {
    const smsNotifications = await Notifications.findSMS();
    const pushNotifications = await Notifications.findPush()

    try {
        // TODO: this commented solution will create a new instance with every notification
        // which is not memory friendly (can be solved using singleton)

        // notifications.map(async notification => {
        //     await provider.getProvider(notification.type).notify(notification);
        // });

        const provider = new baseProvider()
        await _notifyPush(provider, smsNotifications);
        await _notifySMS(provider,  pushNotifications)
    } catch (error) {
        // TODO: log error
        const err = {
            name: 'Notifier service crashed',
            details: error.stack,
            message: error.message,
        }

        throw error;
    }

};
