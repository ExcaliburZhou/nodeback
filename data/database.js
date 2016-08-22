var mongoose = require('mongoose');

var db = mongoose.createConnection('mongodb://127.0.0.1:27017/test');

db.once('open', function(){
    "use strict";
    console.log('opend!')
})

module.exports = db;