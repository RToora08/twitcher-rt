require('dotenv').config(); // to load environment variables
const express = require('express');
const app = express();
const cors = require('cors'); // cross origin resource sharing to handle data from another domains
const bodyParser = require('body-parser'); // to get data from a form via POST request

const errorHandler = require('./handlers/error'); // loading error handler
const authRoutes = require('./routes/auth'); // loading router

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

// if there's any request that starts with /api/auth, run authRoutes
app.use('/api/auth', authRoutes);

app.use((req, res, next) => {
	let err = new Error('Not Found');
	err.status = 404;
	next(err);
});

app.use(errorHandler);

app.listen(PORT, function() {
	console.log(`Serving warbler app on port ${PORT}`);
});
