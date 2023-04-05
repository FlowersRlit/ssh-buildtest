const express = require('express');
const Controller = require('../controllers/controller');

const router = express.Router();

router.use('/home', Controller.helloWorld);

module.exports = router;
