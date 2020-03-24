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
	}
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

// Instance method
// i.e. every document we create from 'User' model will have this method
userSchema.method.comparePassword = async function(candidatePassword, next) {
	try {
		let isMatch = await bcrypt.compare(candidatePassword, this.password);
		return isMatch;
	} catch (err) {
		return next();
	}
};

const User = mongoose.model('User', userSchema);

module.exports = User;
