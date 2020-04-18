const express = require('express');
const router = express.Router(); // This is simply a wat to abstract the routes into individual files so no need to put everything in index.js
const { signup } = require('../handlers/auth');

router.post('/signup', signup); // function themselves {signup, sign-in} live in the handlers folder

module.exports = router;
