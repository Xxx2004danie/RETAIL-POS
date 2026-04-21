const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');
const app = express();

//DATABASE COLLECTION
const Posts = require('./models/product');
const Orders = require("./models/orders");
const Users = require("./models/user");

 
dotenv.config({ path: 'setting.env' });


// MIDDLEWARE
app.use(express.json());

// ROUTES
app.post("/api/v1/products",(req, res) => {
  try {
     Posts.create(req.body);
    res.status(200).json({
      staues: "successfull",
      data: "it has been created successfully",
    });
  } catch (err) {
    console.log("failed to create post", err.message);
  }
});

app.get("/api/v1/products", async (req, res) => {
  try {
    let products = await Posts.find();
    res.status(200).json({
      staues: "successfull",
      data: products,
    });
  } catch (err) {
    console.log("failed to create post", err.message);
  }
});

// FOR SALES
app.post("/api/v1/sales", async (req, res) => {
  try {
    let sale = await Orders.create(req.body);
      console.log(sale);
    res.status(200).json({
      staues: "successfull",
      data: "done",
    });
  } catch (err) {
    console.log("failed to create sales", err.message);
  }
})

app.get("/api/v1/sales", async (req, res) => {
  try {
    let sales = await Orders.find();
    console.log(sales);
    res.status(200).json({
      staues: "successfull",
      data: sales,
    });
  } catch (err) {
    console.log("failed to fetch sales", err.message);
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
});


app.delete("/api/v1/sales/:id", async (req, res) => {
  try {
    let sales = await Orders.findOneAndDelete(req.params.id);
    console.log(sales);
    res.status(200).json({
      staues: "successfully delete file",
      data: sales,
    });
  } catch (err) {
    console.log("failed to delete file", err.message);
  }
});


// FOR USERS
app.post("/api/v1/users", async (req, res) => {
  try {
    let user = await Users.create(req.body);
      console.log(user);
    res.status(200).json({
      staues: "successfull",
      data: "user has been created"
    });
  } catch (err) {
    console.log("failed to create user", err.message);
  }
});

app.get("/api/v1/users", async (req, res) => {
  try {
    let users = await Users.find();
    res.status(200).json({
      staues: "successfull",
      data: users,
    });
  } catch (err) {
    console.log("failed to get users", err.message);
  }
});
module.exports = app;
