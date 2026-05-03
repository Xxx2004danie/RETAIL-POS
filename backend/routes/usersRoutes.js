const express = require("express");
const {
  creatUser,
  getAllUsers,
  getOneUser,
  deleteUser,
} = require("../controllers/usersController.js");
const { model } = require("mongoose");

let router = express.Router();

router.route("/").post(creatUser).get(getAllUsers);

router.route("/:id").get(getOneUser).delete(deleteUser);

module.exports = router;
