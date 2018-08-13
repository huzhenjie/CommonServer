'use strict';

const express = require('express');
const router = express.Router();

const FeedbackController = require('../controller/FeedbackController');
// curl -X POST -H 'appid: 1' -H 'appkey: 5651745861380' -H "Content-type: application/json" -d '{"vc":"vc","vn":"vn","ch":"ch","content":"content","uid":"uid","title":"title","contract":"contract","imgs":["http://baidu.com"]}' 'http://localhost:8042/api/feedback'
router.post('/feedback', FeedbackController.addFeedback);

module.exports = router;