const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
// ROUTES
const SalesRoute = require("./routes/ordersRoutes");
const ProductRoute = require("./routes/productRoutes");
const usersRoute = require("./routes/usersRoutes");

// ALLOW ALL PATH
app.use(cors());

// MIDDLEWARE
app.use(express.json());

// ROUTES
app.use("/products", ProductRoute);
app.use("/users", usersRoute);
app.use("/sales", SalesRoute);

module.exports = app;
