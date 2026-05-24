const express = require("express");
const {
  addProduct,
  getOneItem,
  getAllProduct,
  deleteAllProduct,
} = require("../controllers/productControllers");

let router = express.Router();

router.route("/").post(addProduct).get(getAllProduct).delete(deleteAllProduct);
router.route("/:name").get(getOneItem);

module.exports = router;
