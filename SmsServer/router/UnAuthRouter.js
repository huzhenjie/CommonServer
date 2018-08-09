'use strict';

const express = require('express');
const router = express.Router();

const TestController = require('../controller/TestController');

router.get('/test', TestController.test);

module.exports = router;