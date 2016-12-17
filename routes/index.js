var express = require('express');
var router = express.Router();
var login = require('./login');
var pages = require('./static-page');
var uploader = require('./uploadImg/index');

router.use('/', login);
router.use('/', uploader);
router.use('/', pages);


module.exports = router;