const express = require("express");
const app = express();
const connectDb = require("./connection");
const PORT = 8080;

app.get("/users", async (req, res) => {
    const users = await User.find();
    res.json(users);
});

app.post("/user", async (req, res) => {
    user = req.body.user;
    const user = await User.create(user);
    res.json(user);
});

app.get("/notifications", async (req, res) => {
    const notifications = await Notification.find();
    res.json(notifications);
});

app.post("/notification", async (req, res) => {
    notification = req.body.notification;
    const notifications = await Notification.create(notification);
    res.json(notifications);
});

app.listen(PORT, function() {
    console.log(`Listening on ${PORT}`);

    connectDb().then(() => {
        console.log("MongoDb connected");
    });
});