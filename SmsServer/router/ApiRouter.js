'use strict';

const express = require('express');
const router = express.Router();

const SmsController = require('../controller/SmsController');

//curl -X GET -H 'appid: 1' -H 'appkey: 5651745861380' 'http://localhost:8083/api/sms?tel=15018329815'
router.get('/sms', SmsController.send);
// curl -X POST -H 'appid: 1' -H 'appkey: 5651745861380' -H "Content-type: application/json" -d '{"tel":15018329815,"code":630119}' 'http://localhost:8083/api/sms?tel=15018329815'
router.post('/sms', SmsController.verifySmsCode);

module.exports = router;