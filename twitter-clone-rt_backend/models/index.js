const mongoose = require('mongoose');
mongoose.set('debug', true); // to see the mongo queries that are being run in the terminal
mongoose.Promise = Promise; // this will make sure that mongoose methods are returning promises//async functions returns promises// so that we don't have to use the callback pattern
mongoose.connect('mongodb://localhost/twitter-clone-rt', {
	keepAlive: true
});
