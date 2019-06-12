const mongoose = require("mongoose")
const Schema = mongoose.Schema

const inventorySchema = new Schema({
    productTitle: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    likes: Number
})

module.exports = mongoose.model("inventory", inventorySchema)