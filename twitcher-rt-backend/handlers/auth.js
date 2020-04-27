const db = require('../models'); // ../models/index.js
const jwt = require('jsonwebtoken');

exports.signup = async function(req, res, next) {
	try {
		// create a user
		// req.body is would be the data coming in from
		// an ajax request
		let user = await db.User.create(req.body);
		// destructuring because when creating token you don't
		// have to pass in user.id, user.username etc
		let { id, username, profileImageUrl } = user;

		// create a token (signing a token)
		// process.env.SECRET_KEY
		// if you decrypt the token you can get access to these
		// properties(id, username, ..) also called payload
		let token = jwt.sign({ id, username, profileImageUrl }, process.env.SECRET_KEY);
		return res.status(200).json({
			id,
			username,
			profileImageUrl,
			token
		});
	} catch (err) {
		// if something goes wrong
		// see what king of error it is
		// if it is a certain error
		// respond with username/email already taken
		//
		// if a validation fails
		if (err.code === 11000) {
			err.message = 'Sorry, Username/Email already taken';
		}
		// otherwise just send back a 400 status code error
		return next({
			status: 400,
			message: err.message
		});
	}
};

exports.signin = async function(req, res, next) {
	try {
		// find the user
		let user = await db.User.findOne({
			email: req.body.email
		});
		let { id, username, profileImageUrl } = user;

		// check if their password matches what was sent to the server
		let isMatch = await user.comparePassword(req.body.password);
		// if it all matches
		if (isMatch) {
			// log the in / create a jwt and send it back in the response
			let token = jwt.sign(
				{
					id,
					username,
					profileImageUrl
				},
				process.env.SECRET_KEY
			);
			return res.status(200).json({
				id,
				username,
				profileImageUrl,
				token
			});
		} else {
			return next({
				status: 400,
				message: 'Invalid email/password.'
			});
		}
	} catch (err) {
		return next({
			status: 400,
			message: 'Invalid email/password.'
		});
	}
};
