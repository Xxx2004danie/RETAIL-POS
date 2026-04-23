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
      "beverages",
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

  Stock: {
    type: Number,
    required: true,
    min: 0,
  },

  barcode: {
    type: String,
    unique: true,
  },

  description: {
    type: String,
  },

  isActive: {
    Boolean,
    dafault: true,
  },
});
