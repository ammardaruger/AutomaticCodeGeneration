const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema for Code
const CodeSchema = new Schema({
    code: {
        type: String,
        required: false,
    },
    date: {
        type: String,
        default: Date.now,
    }
});

module.exports = Code = mongoose.model('codes', CodeSchema);