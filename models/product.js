const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter product name"],
      unique: true,
    },
    quantity: {
      type: Number,
      required: [true, "Please enter product quantity"],
    },
    price: { type: Number, required: [true, "Please enter product price"] },
    image: { type: String },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
