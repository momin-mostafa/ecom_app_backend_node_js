const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, unique: true },
        description: { type: String, required: true },
        img: { type: String, required: true },
        size: { type: String },
        color: { type: String },
        category: { type: Array, required: true },
        price: { type: Number, required: true },

    }, { timestamps: true }
)

module.exports = mongoose.model('Product', ProductSchema);