// handlers are just functions that are exported to routes
const db = require('../models');
const jwt = require('jsonwebtoken');

exports.signin = async function(req, res, next) {
	try {
		// finding a user
		let user = await db.User.findOne({
			email: req.body.email
		});
		let { id, username, profileImageUrl } = user;
		// checking if the password matches what was sent to the server
		let isMatch = await user.comparePassword(req.body.password);
		// if it all matches
		// log the user in / signing/creating a jwt
		if (isMatch) {
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
				message: 'Invalid Email/Password'
			});
		}
	} catch (err) {
		return next({
			status: 400,
			message: 'Invalid Email/Password'
		});
	}
};

exports.signup = async function(req, res, next) {
	try {
		// create a user
		let user = await db.User.create(req.body);
		let { id, username, profileImageUrl } = user;
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
		// create a token (signing a token)
	} catch (err) {
		// code number for validation failure = 11000
		if (err.code === 11000) {
			err.message = 'Sorry, Username/Email already taken';
		}
		return next({
			status: 400,
			message: err.message
		});
		// examine error
		// if certain type of error
		// respond with username/email already taken
		// otherwise return status 400
	}
};
