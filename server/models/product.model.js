const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [.01, "Price must be at least one cent"]
    },
    description: {
        type: String,
        required: [true, "Description is required"]
    }
}, {timestamps: true});

module.exports = mongoose.model('Product', ProductSchema);