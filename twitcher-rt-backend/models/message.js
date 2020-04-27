const mongoose = require('mongoose');
const User = require('./user'); // Requiring User Model to make every message have a reference to a user who created it

const messageSchema = new mongoose.Schema(
	{
		text: {
			type: String,
			required: true,
			maxLength: 200
		},
		// reference to every user for a message
		user: {
			type: mongoose.Schema.Types.ObjectId, // unique identifier for some user
			ref: 'User' // reference to User model
		}
	},
	{
		timestamps: true // this will add a createdAt and an updateAt for
		// every single document that Message schema creates
	}
);

// when a user deletes a message, delete the associated message id from the user model
// we do not want a situation where a user deletes a message but
// message_id is still in user's messages list
// this remove hook is being used in handlers/messages.js deleteMessage
messageSchema.pre('remove', async function(next) {
	try {
		// find a user
		let user = await User.findById(this.user); // this(messageSchema)
		// remove the id of the messages from user's messages list
		user.messages.remove(this.id);
		// save that user
		await user.save();
		// return next
		return next();
	} catch (err) {
		return next(err);
	}
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
