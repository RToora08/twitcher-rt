const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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
	// all the messages that belongs to a user
	messages: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Message'
		}
	]
});

// Adding a pre 'save' hook
// i.e. right before saving a document in mongoose run this async function
userSchema.pre('save', async function(next) {
	try {
		if (!this.isModified('password')) {
			return next();
		}
		let hashedPassword = await bcrypt.hash(this.password, 13);
		this.password = hashedPassword;
		return next();
	} catch (err) {
		return next(err);
	}
});

// Adding a method
// This is the idea of an instance method or a method that every
// document that we create from this model has
userSchema.methods.comparePassword = async function(candidatePassword, next) {
	try {
		// this will compare the hash that is crated from the user input 'candidatePassword'
		// with the hash that is in the database and will return true or false
		let isMatch = await bcrypt.compare(candidatePassword, this.password);
		return isMatch; // if isMatch is true then you'll log in successfully
	} catch (err) {
		return next(err);
	}
};

const User = mongoose.model('User', userSchema);

module.exports = User;
