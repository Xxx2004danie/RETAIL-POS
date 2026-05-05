const express = require("express");

let {
  createSales,
  getAllSales,
  deleteOneSales,
} = require("../controllers/ordersController");

let router = express.Router();

router.route("/").post(createSales).get(getAllSales);

router.route("/:id").delete(deleteOneSales)

module.exports = router