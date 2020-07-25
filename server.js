'use strict';

const app = require('./src/Routes/notify');

const mongoose = require('mongoose');
const connection = process.env.MONOG_URL;
const PORT = 8080;

app.listen(PORT, async function() {
	console.log(`Listening on ${PORT}`);
	try {
		await mongoose.connect(connection);
		console.log('DB connected');
		return true;
	} catch(error) {
		console.log(error);
		throw error;
	}
});