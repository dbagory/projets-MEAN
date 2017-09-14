var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/start_pitch', {useMongoClient: true});

var USERSchema = require('./users');
var UserModel = mongoose.model('User', USERSchema, 'users');
// var MessageModel = mongoose.model('Message', MESSAGESchema, 'messages');

module.exports = {
    UserModel
    // MessageModel
}
    

