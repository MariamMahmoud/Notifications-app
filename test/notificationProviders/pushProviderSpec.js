/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const usersController = require('../../src/Controllers/users');
const chai = require('chai');
const expect = chai.expect;

describe('Providers/pushProviders', () => {
	it('should push notifications to mobile app');
	it('should push notification to multiple users');
	it('should catch error in case push notifications failed');
	it('should mark successful notifications as green');
	it('should mark failed notifications as red');
});
