const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;

app.use((req, res, next) => {
	res.send('Hello World!');
});

app.listen(PORT, function() {
	console.log(`Serving warbler app on port ${PORT}`);
});
