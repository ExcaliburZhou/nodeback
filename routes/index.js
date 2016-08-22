var express = require('express');
var router = express.Router();
var second = require('./second');
var pages = require('./static-page');
var uploader = require('./uploadImg/index');

router.use('/', second);
router.use('/', uploader);
router.use('/', pages);


module.exports = router;