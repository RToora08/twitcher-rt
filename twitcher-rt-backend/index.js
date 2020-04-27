require('dotenv').config(); // to load environment variables
const express = require('express');
const app = express();
const cors = require('cors'); // cross origin resource sharing to handle data from another domains
const bodyParser = require('body-parser'); // to get data from a form via POST request

// importing handlers
const errorHandler = require('./handlers/error'); // loading error handler

// importing models
const db = require('./models');

// importing routes
const authRoutes = require('./routes/auth'); // loading router
const messagesRoute = require('./routes/messages'); //

// importing middleware
const { loginRequired, ensureCorrectUser } = require('./middleware/auth');

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

// auth routes
// if there's any request that starts with /api/auth, run authRoutes
app.use('/api/auth', authRoutes);

// messages routes
// middleware - before accessing the messages route make sure the user is logged in
// and make sure its the correct user
app.use('/api/users/:id/messages', loginRequired, ensureCorrectUser, messagesRoute);
// get all of the messages for every single user to show the time line
// of messages on the front-end, make sure user is logged in.
app.get('/api/messages', loginRequired, async function(req, res, next) {
	try {
		let messages = await db.Message
			.find()
			.sort({ createdAt: 'desc' })
			// populate wii return the entire Message.user object
			// but we only need username and the profileImageUrl
			.populate('user', {
				username: true,
				profileImageUrl: true
			});
		return res.status(200).json(messages);
	} catch (err) {
		return next(err);
	}
});

app.use((req, res, next) => {
	let err = new Error('Not Found');
	err.status = 404;
	next(err);
});

app.use(errorHandler);

app.listen(PORT, function() {
	console.log(`Serving warbler app on port ${PORT}`);
});
