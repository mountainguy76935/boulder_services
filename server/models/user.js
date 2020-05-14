const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: {
        type:  String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    affiliation: {
        type: String,
        required: true
    },
    //same as checked in resource model
    likes: {
        type: Array,
        required: true
    },
    reviews: {
        type: Array,
        required: true
    }
});

module.exports = mongoose.model('User', userSchema)