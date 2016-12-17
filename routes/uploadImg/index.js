var express = require('express');
var router = express.Router();
var multer  = require('multer')
var path = require('path');

var config = require('../../common/ip');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname +  '/../../uploads'))
    },
    filename: function (req, file, cb) {
        req.filetime = Date.now();
        cb(null, file.fieldname + '-' + req.filetime + '.png');
    }
})

var upload = multer({ storage: storage });

router.post('/upload', upload.single('picture'), function(req, res){
    "use strict";
    res.send({
        status: {
            state: 0,
            msg: 'ok'
        },
        data: {
            url: 'http://' + config.ip + ':' + config.port + '/' + path.join( req.file.fieldname + '-' + req.filetime + '.png')
        }
    });
});

module.exports = router;