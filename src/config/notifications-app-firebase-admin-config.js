/* eslint-disable no-undef */
'use strict';

module.exports = {
	type: 'service_account',
	project_id: 'notifications-app-bb3d5',
	private_key_id: process.env.FIREHOSE_KEY_ID,
	private_key: process.env.FIREHOSE_KEY.replace(/\\n/g, '\n'),
	client_email: 'firebase-adminsdk-eshik@notifications-app-bb3d5.iam.gserviceaccount.com',
	client_id: '114860668211531873069',
	auth_uri: 'https://accounts.google.com/o/oauth2/auth',
	token_uri: 'https://oauth2.googleapis.com/token',
	auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
	client_x509_cert_url: 'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-eshik%40notifications-app-bb3d5.iam.gserviceaccount.com'
};
