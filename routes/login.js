var express = require('express');
var router = express.Router();
var request = require('./request');
var model = require('./../data/model');

var person = require(".../");
router.get('/wlgq', function(req, res, next){
    "use strict";

    var user = req.query.username;
    person.find({user: user}, function(){
        res.send('')
    })

    request(req, res, next);

}, function(req, res){
    "use strict";
    res.send({
        text: "second router!"
    })
});
router.get('/wlgqd', function(req, res){
    "use strict";
    res.send({
        text: "second router2!"
    })
});

router.get('/db', function(req,res){
    "use strict";
    model
        .find({})
        .exec(function(err, doc){
            res.send(doc)
        })
})

router.get('/login', function(req, res){
    "use strict";
    var name = req.query.name;
    if(name){
        req.session.name = name;
        res.send('ok: ' + name)
    }else {
        res.send('pls add name')
    }
})

router.get('/getName', function(req, res){
    "use strict";
    var name = req.session.name;
    res.send('name: ' + name)
})


var i = 100;
router.get('/dbi', function(req, res){
    "use strict";
    model.insertMany([{
        name: [{a:1}]
    }], function(err, doc){
        res.send(doc)
    })
});

router.get('/')

module.exports = router;