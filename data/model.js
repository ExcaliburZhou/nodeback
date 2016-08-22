var db = require('./database');
var mongoose = require("mongoose");

var schema = mongoose.Schema({
    name: String
})

var model = db.model('runoob', schema, 'runoob');

module.exports = model;