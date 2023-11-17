const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId
const productsSchema = new Schema({
    name: String,
    price: Number,
    allow:Boolean,
})

const Product = mongoose.model('product',productsSchema)

module.exports = Product