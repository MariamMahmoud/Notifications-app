const express = require('express');
const app = express();
const connectDb = require('./src/config/connection');
const PORT = 8080;

const notify = require('./src/Routes/notify')(app);

app.listen(PORT, function() {
    console.log(`Listening on ${PORT}`);

    connectDb().then(() => {
        console.log('MongoDb connected');
    });
});