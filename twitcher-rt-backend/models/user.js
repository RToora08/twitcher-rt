const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); // for password hashing
const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		unique: true
	},
	username: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	profileImageUrl: {
		type: String
	},
	// array/list of messages that refers to individual message_id
	messages: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Message'
		}
	]
});
// adding a pre save hook which means right before
// saving this document run this async function
// which allows the use of await keyword which means
userSchema.pre('save', async function(next) {
	try {
		if (!this.isModified('password')) {
			return next();
		}
		// bcrypt.hash is an asynchronous function // so we have to wait for it to finish hence the await keyword
		let hashedPassword = await bcrypt.hash(this.password, parseInt(process.env.SALT));
		this.password = hashedPassword;
		return next();
	} catch (err) {
		return next(err);
	}
});

// adding an instance method which means every document we
// create from this model will have this method
userSchema.methods.comparePassword = async function(candidatePassword, next) {
	// the idea of checking if the user has put correct password
	// is to re-encrypting the user input and comparing it against
	// the the hash that is saved in the database
	try {
		let isMatch = await bcrypt.compare(candidatePassword, this.password);
		return isMatch;
	} catch (err) {
		next(err);
	}
};

// User is a model which is going to use userSchema to create every user object
const User = mongoose.model('User', userSchema);
module.exports = User;
