const app = require('./src/Routes/notify');
const connectDb = require('./src/config/connection');
const PORT = 8080;

app.listen(PORT, function() {
    console.log(`Listening on ${PORT}`);

    connectDb().then(() => {
        console.log('MongoDb connected');
    });
});