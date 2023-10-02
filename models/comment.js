const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user.js');

const reviewSchema = new Schema({
    caption: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model("Review", reviewSchema);