/**
 * Created by Excalibur on 17/1/12.
 * ===========
 * if you have any question, pls contact with me.
 * https://github.com/ExcaliburZhou
 */


var mongoose = require("../../database/database");
var Schema = mongoose.Schema;
var usersSchema = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    nickname: {
        type: String
    },
    phone: {
        type: String
    },
    createTime: {
        type: Date
    },
    email: {
        type: String
    }
});

module.exports = mongoose.model('user', usersSchema);