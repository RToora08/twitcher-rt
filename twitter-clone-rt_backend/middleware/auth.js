require('dotenv').config();
const jwt = require('jsonwebtoken');

// make sure the user is logged in - Authentication
exports.loginRequired = function(req, res, next) {
	try {
		// grabbing the token form the header
		// Bearer token eg. 'Bearer kasdjfjlkas'
		const token = req.headers.authorization.split(' ')[1];
		jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
			// if payload exists
			if (decoded) {
				return next();
			} else {
				return next({
					status: 401, // 401 - unauthorized
					message: 'Please log in first'
				});
			}
		});
	} catch (err) {
		return next({
			status: 401,
			message: 'Please log in first'
		});
	}
};

// make sure to get the correct user - Authorization
exports.ensureCorrectUser = function(req, res, next) {
	try {
		const token = req.headers.authorization.split(' ')[1];
		jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
			if (decoded && decoded.id === req.params.id) {
				return next();
			} else {
				return next({
					status: 401,
					message: 'Unauthorized'
				});
			}
		});
	} catch (err) {
		return next({
			status: 401,
			message: 'Unauthorized'
		});
	}
};
