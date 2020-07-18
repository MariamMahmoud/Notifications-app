# Notifications App
Backend implementation to sending notification to users via multiple providers

Currently Providers:
    - Push notifications (through firebase)
    - SMS notifications  (through a simulation provider called bipsms)


## Design Pattern used

[**Factory design pattern**](https://www.tutorialspoint.com/design_pattern/factory_pattern.htm), where you can create an instance of the needed provider type using it's name

```
const baseProvider = new BaseProvider();
const myProvider = baseProvider.getProvider('sms');
```

note: calling non existing provider types will throw an error.

## System Design & explanation

- Notify action will be triggered either manually by triggering an endpoint or automatically via a Crone Job
- Notifications will be inserted in MongoDB (via consol, admin or endpoints) linked to existing user(s)
- New notifications will be marked as yellow (pending)

### The Crone job
A crone job with a configurable time interval will fetch pending notifications and fire them according to:
    1- Their type
    2- The number of users
In case of a group of users the Job will use the notifyMany method of each provider, for single users it will use Notify one.

### The api
It can be managed in several ways, it can take the notification message and fires it immediately,
or it can fetch a certain notification from the DB using it's ID then fires it,
or will simply triggers the notify action. It depends on the business requirements but I chose to do the latter.

### Mark as done
After either triggering option a notification should be either updated to green if success or red if failed
Red Notifications can be later alerted to admin or retried within a certain time interval
