const express = require("express");
const {
  createUser,
  getAllUsers,
  getOneUser,
  deleteUser,
} = require("../controllers/usersController.js");

let router = express.Router();

router.route("/").post(createUser).get(getAllUsers);

router.route("/:id").get(getOneUser).delete(deleteUser);

module.exports = router;
