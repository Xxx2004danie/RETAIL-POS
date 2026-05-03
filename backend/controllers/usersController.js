const Users = require("../models/usersModels");

// CREATE USER
let creatUser = async (req, res) => {
  try {
    let user = await Users.create(req.body);
    res.status(201).json({
      status: "Successful",
      message: "user has been added",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      status: "unSuccessful",
      message: "failed to create user",
      error: message.error,
    });
  }
};

// GET USERS
let getAllUsers = async (req, res) => {
  try {
    let users = await Users.find();

    // CHECK if USERS EXIST
    if (users.length === 0) {
      res.status(200).json({
        status: "successful",
        data: {
          users: Users,
        },
      });
    } else {
      res.status(404).json({
        status: "sucessful",
        data: {
          users: "no users found",
        },
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "bad request",
      message: "failed to get all users",
      error: error.message,
    });
  }
};

// GET ONE USER BASED :ID
let getOneUser = async (req, res) => {
  try {
    let user = await Users.findByID(req.params.id);

    // checking if user exist
    if (user) {
      res.status(200).json({
        status: "successful",
        data: {
          user: user,
        },
      });
    } else {
      res.status(404).json({
        status: "failed",
        data: {
          user: "user not found",
        },
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "unsuccessful",
      data: "erron",
      error: error.message,
    });
  }
};

// DELETE USER BY :ID
let deleteUser = async (req, res) => {
  try {
    let deletedUser = Users.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "successful",
      data: "user has been deleted",
      user: deletedUser,
    });
  } catch (error) {
    res.status(400).json({
      status: "bad request",
      message: "failed to delete user",
      error: error.message,
    });
  }
};

module.exports = {
  creatUser,
  getAllUsers,
  getOneUser,
  deleteUser,
};
