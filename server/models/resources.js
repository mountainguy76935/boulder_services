const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const resourceSchema = new Schema({
    title: {
        type:  String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    checked: {
        type: Array,
        required: true
    }
});

module.exports = mongoose.model('Resource', resourceSchema)