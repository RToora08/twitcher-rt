const mongoose = require('mongoose');
mongoose.set('debug', true); // to see the mongoose queries that are being run in the terminal
mongoose.Promise = Promise; // specifying ES2015 Promise Library to avoid using callback functions
mongoose.connect('mongodb://localhost/twitcher-rt', {
	keepAlive: true
});

module.exports.User = require('./user'); // idea of bundling, you can create different properties on module.exports for different models
module.exports.Message = require('./message');
