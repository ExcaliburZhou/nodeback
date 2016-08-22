/**
 * Created by ExcaliburZhou on 7/11/16.
 */
var express = require('express');
var router = express.Router();
var path = require('path');

router.use('/', function(err, req, res, next){
    "use strict";
    if(err) {
        res.status(500).send({
            hehe: 0
        })
    }
    next();
})


// 设置404页面
router.all("*", function(req, res){
    "use strict";
    res.status(404).sendFile(path.join(__dirname + '/../public/404.html'))
});

module.exports = router;