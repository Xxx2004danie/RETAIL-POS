const express = require("express");

let {
  getAllSales,
  deleteOneSales,
} = require("../controllers/ordersController");

let router = express.Router();

router.route("/").get(getAllSales)

router.route("/:id").delete(deleteOneSales)

module.exports = router