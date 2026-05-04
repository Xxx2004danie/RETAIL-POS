const mongoose = require("mongoose");

let productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  category: {
    type: String,
    requied: true,
    enum: [
      "food",
      "beverage",
      "household",
      "cosmetics",
      "electronics",
      "others",
    ],
  },

  price: {
    type: Number,
    required: true,
    min: 0,
  },

  stock: {
    type: Number,
    required: true,
    min: 0,
  },
});

let products = new mongoose.model("products", productSchema);

module.exports = products; 