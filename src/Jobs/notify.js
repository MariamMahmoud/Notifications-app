'use strict';

const  cron = require('node-cron');
const notify = require('../Services/notify');
// eslint-disable-next-line no-undef
const timeSchedule = process.env.TIME_SCHEDULE || '30 * * * * *';

const startJob = async() => {
	try {
		cron.schedule(timeSchedule, async() => {
			await notify();
		});
	} catch(error) {
		// TODO: log error
		const err = {
			name: 'Crone Job crashed',
			details: error.stack,
			message: error.message,
		};

		throw err;
	}
};

startJob().then(() => console.log('job started'));
