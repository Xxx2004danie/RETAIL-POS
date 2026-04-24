const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');
const app = express();

//DATABASE COLLECTION
const Products = require("./models/productModels");
const Sales = require("./models/pastOrdersModels");
const Users = require("./models/usersModels");

dotenv.config({ path: "setting.env" });

// MIDDLEWARE
app.use(express.json());

// ROUTES
app.post("/api/v1/products", (req, res) => {
  try {
    Products.create(req.body);
    res.status(200).json({
      status: "successfull",
      data: " product is successfully added",
    });
  } catch (error) {
    res.status(400).json({
      status: "unsuccessfull",
      data: "bad request",
      error: error.message,
    });
  }
});

app.get("/api/v1/products", async (req, res) => {
  try {
    let products = await Products.find();
    if (products) {
      res.status(404).json({
        status: "failed",
        message: "product not found",
      });
    }
    return res.status(200).json({
      staues: "successfull",
      data: products,
    });
  } catch (error) {
    res.status(400).json({
      staues: "unsuccessfull",
      message: "bad request",
      error: error.message,
    });
  }
});

// GET PRODUCT BY CATEGORY

app.get("/api/v1/products", async (req, res) => {
  try {
    let products = await Products.find(req.query);
    if (products.length === 0) {
      return res.status(404).json({
        status: "failed",
        data: "products not found",
      });
    }
    return res.status(200).json({
      status: "successful",
      data: products,
    });
  } catch (error) {
    res.status(400).json({
      status: "not successful",
      error: "bad request" + error.message,
    });
  }
});

// FOR SALES HISTORY
app.post("/api/v1/sale", async (req, res) => {
  try {
    let sale = await Orders.create(req.body);
    console.log(sale);
    res.status(200).json({
      staues: "successfull",
      data: "done",
    });
  } catch (error) {
    console.log("failed to create sales", error.message);
  }
});

//  TO GET ALL SALES

app.get("/api/v1/sales", async (req, res) => {
  try {
    let sales = await Orders.find();
    console.log(sales);
    res.status(200).json({
      staues: "successfull",
      data: sales,
    });
  } catch (error) {
    console.log("failed to fetch sales", error.message);
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
});

// TO GET A SINGLE SALE
app.get("/api/v1/sales/:id", async (req, res) => {
  try {
    let sale = await Orders.findById(req.params.id);

    if (!sale) {
      return res.status(404).json({
        status: "failed to get sale",
        data: "sale not found",
      });
    }
    return res.status(200).json({
      status: "successful",
      data: sale,
    });
  } catch (error) {
    res.status(400).json({
      status: "unsuccessful",
      message: "request failed",
      error: error.message,
    });
  }
});

// FOR USERS
app.post("/api/v1/users", async (req, res) => {
  try {
    let user = await Users.create(req.body);
    console.log(user);
    res.status(201).json({
      staues: "successfull",
      data: "user has been created",
    });
  } catch (error) {
    console.log("failed to create user", error.message);
  }
});

// TO GET ALL USERS
app.get("/api/v1/users", async (req, res) => {
  try {
    let users = await Users.find();
    if (users.length === 0) {
      return res.status(404).json({
        statues: "succeful  but nothing about users",
        data: "no users yet",
      });
    }
    return res.status(200).json({
      statues: "successful but nothing about users",
      data: users,
    });
  } catch (error) {
    res.status(400).json({
      status: "request faild",
      message: "failed to get users",
      error: error.message,
    });
  }
});

// TO GET ONLY ONE USER
app.get("/api/v1/users/:userid", async (req, res) => {
  try {
    let user = await Users.findById(req.params.userid);
    if (!user) {
      return res.status(404).json({
        status: "failed",
        data: "user not found",
      });
    }
    return res.status(200).json({
      status: "successful",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      status: "request faild",
      message: "failed to get users",
      error: error.message,
    });
  }
});

module.exports = app;
