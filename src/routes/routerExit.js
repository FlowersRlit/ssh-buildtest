const express = require('express');
const Controller = require('../controllers/controllerExit');

const router = express.Router();

router.get('/exit', Controller.exit);

module.exports = router;
