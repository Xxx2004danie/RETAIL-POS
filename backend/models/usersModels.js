const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },

  email: {
    type: String,
    require: true,
    lowercase: true,
    trim: true,
    unique: true,
  },

  phoneNumber: {
    type: String,
    require: true,
    trim: true,
  },

  role: {
    type: String,
    require: true,
    enum: ["cashier", "admin"],
    default: "cashier",
  },
});

let User = new mongoose.model("User", userSchema);

module.exports = User;
