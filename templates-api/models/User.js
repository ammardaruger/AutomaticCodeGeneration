const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema for Code
const UserSchema = new Schema({
    email: {
        type: String,
        required: false,
    },
    password:{
        type: String,
        required: false, 
    },
    date: {
        type: String,
        default: Date.now,
    }
});

module.exports = User = mongoose.model('users', UserSchema);