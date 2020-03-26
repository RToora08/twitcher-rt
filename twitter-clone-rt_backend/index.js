require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors'); // Cross Origin Resource Sharing // Different port numbers violates the same origin policy // cors is used when make requests from another domain
const bodyParser = require('body-parser'); // body-parser allows to get data from a forum via POST
const errorHandler = require('./handlers/error'); // piece of middle for formatting errors

// importing routes
const authRoutes = require('./routes/auth');
const messagesRoutes = require('./routes/messages');

// importing routes
const { loginRequired, ensureCorrectUser } = require('./middleware/auth');

const PORT = 8081;

app.use(cors());
app.use(bodyParser.json());

// Specifying Routes
app.use('/api/auth', authRoutes);
app.use('/api/users/:id/messages', loginRequired, ensureCorrectUser, messagesRoutes);

// if none of those routes were reached run this function
// i.e. using errorHandler
app.use((req, res, next) => {
	let err = new Error('Not Found');
	err.status = 404;
	next(err);
});

app.use(errorHandler);

app.listen(PORT, () => {
	console.log(`Server starting on PORT=${PORT}`);
});
