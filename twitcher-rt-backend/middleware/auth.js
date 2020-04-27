// This middleware will make sure that a user is logged in before
// posting a message and that they're in-fact the correct user

// This middleware will sit between the request and
// handler to create a message. This way if someone's not
// logged in they cannot create a message

const jwt = require('jsonwebtoken'); // to decode the tokens that are passed

// make sure that the user is logged in - Authentication
exports.loginRequired = function(req, res, next) {
	try {
		// Getting Token from HTTP - Authorization Header
		// This is what an Authorization header looks like
		// Authorization: Bearer <token>
		// Authorization: Bearer YWxhZGRpbjpvcGVuc2VzYW1l
		const token = req.headers.authorization.split(' ')[1];
		// using try catch block because if the headers.authorization is
		// undefined, code will break

		// Decoding the token
		jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
			if (decoded) {
				return next();
			} else {
				// if token cannot be decoded
				return next({
					status: 401,
					message: 'Login Required'
				});
			}
		});
	} catch (err) {
		return next({
			status: 401,
			message: 'Login Required'
		});
	}
};

// make sure to get the correct user - Authorization
// even if someone's logged in, make sure they cannot
// modify other user's information
exports.ensureCorrectUser = function(req, res, next) {
	try {
		const token = req.headers.authorization.split(' ')[1];
		jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
			// if decoding is successful &&
			// if the id decoded from the payload and
			// id in the url(/api/users/:id/messages) is same
			if (decoded && decoded.id === req.params.id) {
				return next();
			} else {
				return next({
					status: 401, // Unauthorized
					message: 'Unauthorized'
				});
			}
		});
	} catch (err) {
		return next({
			status: 401, // Unauthorized
			message: 'Unauthorized'
		});
	}
};
