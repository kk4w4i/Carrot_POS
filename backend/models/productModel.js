const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productSchema = new Schema({
    title: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: false
    }
}, { timestamps: true })

module.exports = mongoose.model('Products', productSchema)