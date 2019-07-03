const mongoose = require("mongoose")
const Schema = mongoose.Schema

const menuSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    menuType: {
        type: String,
        required: true,
        enum: ["breakfast", "lunch", "side", "beverage"],
        default: "breakfast"
    },
    subMenuType: {
        type: String,
        required: true,
        default: ""
    },
    localFavorite: {
        type: Boolean,
        required: true,
        default: false
    },
    animalOrigin: {
        type: Boolean,
        required: true,
        default: false
    },
    vegan: {
        type: Boolean,
        default: false
    },
    vegetarian: {
        type: Boolean,
        default: false
    },
    foodInfo: {
        allergens: {
            peanuts: {
                type: Boolean,
                default: false
            },
            treeNuts: {
                type: Boolean,
                default: false
            },
            milk: {
                type: Boolean,
                default: false
            },
            egg: {
                type: Boolean,
                default: false
            },
            wheat: {
                type: Boolean,
                default: false
            },
            soy: {
                type: Boolean,
                default: false
            },
            fish: {
                type: Boolean,
                default: false
            },
            shellfish: {
                type: Boolean,
                default: false
            },
        },
        calories: {
            type: Number,
            default: 0
        }
    },
    imgUrl: {
        type: String,
        default: ""
    },
    showModal: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("menu", menuSchema)