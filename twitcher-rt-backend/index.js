const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const errorHandler = require('./handlers/error.js');

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
	let err = new Error('Not Found');
	err.status = 404;
	next(err);
});

app.use(errorHandler);

app.listen(PORT, function() {
	console.log(`Serving warbler app on port ${PORT}`);
});
