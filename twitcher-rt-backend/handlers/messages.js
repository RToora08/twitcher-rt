const db = require('../models');

// createMessage
// api/user/:id/messages, where we'll grab the id from
exports.createMessage = async function(req, res, next) {
	try {
		// making a new message
		let message = await db.Message.create({
			text: req.body.text,
			user: req.params.id
		});
		// find the user
		// we need to find the user so that we can add
		// a property on that user
		let foundUser = await db.User.findById(req.params.id);
		// pushing the new message on user's messages array/list
		foundUser.messages.push(message.id);
		await foundUser.save();
		// once the user is saved, send back the message with that user's data
		let foundMessage = await db.Message.findById(message._id).populate('user', {
			username: true,
			profileImageUrl: true
		});
		return res.status(200).json(foundMessage);
	} catch (err) {}
};

// getMessage
// GET-/api/users/:id/messages/:message_id
exports.getMessage = async function(req, res, next) {
	try {
		let message = await db.Message.findById(req.params.message_id);
		return res.status(200).json(message);
	} catch (err) {
		return next(err);
	}
};

// deleteMessage
// DELETE-/api/users/:id/messages/:message_id
exports.deleteMessage = async function(req, res, next) {
	try {
		let foundMessage = await db.Message.findById(req.params.message_id);
		await foundMessage.remove();
		return res.status(200).json(foundMessage);
	} catch (err) {
		return next(err);
	}
};
