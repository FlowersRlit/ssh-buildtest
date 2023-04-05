const express = require('express');
const Controller = require('../controllers/controllerBiodata');

const router = express.Router();

router.get('/biodata', Controller.nama);

module.exports = router;
