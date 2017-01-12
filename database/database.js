var mongoose = require('mongoose');
var DB_URL = 'mongodb://localhost/test';

mongoose.connect(DB_URL);
/**
 * 连接成功
 */
mongoose.connection.on('connected', function () {
    console.log('Mongoose connection open to ' + DB_URL);
});

/**
 * 连接异常
 */
mongoose.connection.on('error',function (err) {
    console.log('Mongoose connection error: ' + err);
});

/**
 * 连接断开
 */
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose connection disconnected');
});


var Schema = mongoose.Schema;

var user = new Schema({
    sex: {
        type: String
    },
    age: {
        type: Number
    },
    color: {
        type: String
    }
});

var person = mongoose.model('sjj', user);

module.exports = person;


person.find({}, function(e, per){
    if(per.length > 0){
        person.find({}, function(){

        })
    }else {
        res.send('账号错误')
    }


});

person.create({
    sex: "33",
    age: 18
}, function(e){
    console.log(e);
})

//var one = new person({
//    sex: "bbb",
//    age: 18,
//    color: "ddd"
//});
//
//one.save();