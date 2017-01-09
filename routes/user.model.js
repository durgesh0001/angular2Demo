'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://durgesh:123456@ds047504.mlab.com:47504/angular2demo');
var UserSchema = new Schema({
    firstname: String,
    email: { type: String, lowercase: true },
    password: String,
    username: String,
});

module.exports = mongoose.model('User', UserSchema);
/**
 * Created by root on 28/12/16.
 */
