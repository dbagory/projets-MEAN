var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var USERSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
},
{timestamps:true});


module.exports = USERSchema;