/**
 * Created by Excalibur on 17/1/10.
 */

var mongoose = require('./database/database');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    age: {
        type: Number
    }
});


