const mongoose = require("mongoose");

let pastOrderSchema = new mongoose.Schema({
  CustomerName: {
    type: String,
    require: true("Name of customer  is required"),
  },


  items: [
    {
      name: String,
      quantity: {
        type: Number,
        required: true,
      },
      price: {
        type: Number,
        required: true
      }
    },],
  
  total: {
    type: Number,
    required: true
  },

  date: {
    type: Date,
    default : Date.now
  },

  cashier: {
    type: String,
    required: true
  }
});

let PastOrders = new mongoose.model("PastOrders", pastOrderSchema);

export default PastOrders;
