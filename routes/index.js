var express = require('express');
var router = express.Router();
var user = require('./user/login');
//var pages = require('./static-page');
//var uploader = require('./uploadImg/index');

router.use('/users', user);
//router.use('/', uploader);
//router.use('/', pages);


module.exports = router;