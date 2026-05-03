const express = require("express");
const {
  addProduct,
  getOneItem,
  getAllProduct,
} = require("../controllers/productControllers");

let router = express.Router();

router.route("/").post(addProduct).get(getOneItem).get(getAllProduct);

module.exports = router;
