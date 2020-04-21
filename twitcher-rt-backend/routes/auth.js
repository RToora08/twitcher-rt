const express = require('express');
const router = express.Router(); // This is simply a wat to abstract the routes into individual files so no need to put everything in index.js
const { signup, signin } = require('../handlers/auth');

router.post('/signup', signup); // function {signup, signup} itself  lives in the handlers folder
router.post('/signin', signin); // function {signin, signin} itself  lives in the handlers folder

module.exports = router;
