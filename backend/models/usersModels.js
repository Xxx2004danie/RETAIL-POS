const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true("Name is required"),
  },
  password: {
    type: String,
    require: true("Name is required"),
    minlengt: 8,
    trim: true,
  },

  email: {
    type: String,
    require: true("Name is required"),
    lowercase: true,
    trim: true,
    unique: true,
  },

  phoneNumber: {
    type: Number,
    require: true("Name is required"),
    trim: true,
  },

  role: {
    type: String,
    require: true("Name is required"),
    enum: ["user", "admin"],
    default: "user",
  },
});

let User = new mongoose.model("User", userSchema);

export default User;
