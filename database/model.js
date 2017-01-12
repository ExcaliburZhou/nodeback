
var mongoose = require("mongoose");

var schema = mongoose.Schema({
    name: String
})

var model = mongoose.model('runoob', schema, 'runoob');

module.exports = model;