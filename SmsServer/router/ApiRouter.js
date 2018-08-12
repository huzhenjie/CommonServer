'use strict';

const express = require('express');
const router = express.Router();

const SmsController = require('../controller/SmsController');

//curl -H 'appid: 1' -H 'appkey: 5651745861380' 'http://localhost:8083/api/sms'
router.get('/sms', SmsController.send);

module.exports = router;