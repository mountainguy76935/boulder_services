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
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    services: {
        type: Array,
        required: true
    }
});

module.exports = mongoose.model('Resource', resourceSchema)