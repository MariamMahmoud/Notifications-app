'use strict';

// TODO: add bulkNotify feature (different messages to different users)

class BaseProvider {
	constructor() {}

	notify() {
		throw new Error('Provider must implement a notify method');
	}
}


module.exports = BaseProvider;
