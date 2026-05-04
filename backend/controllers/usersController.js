const Users = require("../models/usersModels");

// CREATE USER
let createUser = async (req, res) => {
  try {
    let user = await Users.create(req.body);
    res.status(201).json({
      status: "success",
      message: "user has been added",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "failed to create user",
      error: error.message,
    });
  }
};

// GET USERS
let getAllUsers = async (req, res) => {
  try {
    let users = await Users.find();

    res.status(200).json({
      status: "success",
      data: {
        users: users,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "failed to get all users",
      error: error.message,
    });
  }
};

// GET ONE USER BASED :ID
let getOneUser = async (req, res) => {
  try {
    let user = await Users.findById(req.params.id);

    // checking if user exist
    if (user) {
      return res.status(200).json({
        status: "success",
        data: user,
      });
    } else {
      return res.status(404).json({
        status: "fail",
        data: {
          user: "user not found",
        },
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "error",
      error: error.message,
    });
  }
};

// DELETE USER BY :ID
let deleteUser = async (req, res) => {
  try {
    let deletedUser = await Users.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      data: "user has been deleted",
      user: deletedUser,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "failed to delete user",
      error: error.message,
    });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getOneUser,
  deleteUser,
};
