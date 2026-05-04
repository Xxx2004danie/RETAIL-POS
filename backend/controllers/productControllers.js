const Products = require("../models/productModels.js");

// ADDING PRODUCT
let addProduct = async (req, res) => {
  try {
    let addedProduct = await Products.create(req.body);
    res.status(201).json({
      status: "successful",
      message: "product added",
      data: addedProduct,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "error adding product",
      error: error.message,
    });
  }
};

// GETTING ALL PRODUCT

let getAllProduct = async (req, res) => {
  try {
    // getting products
    let products = await Products.find();

    res.status(200).json({
      status: "successful",
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      status: "unsuccessful",
      error: error.message,
    });
  }
};

// GET ONE PRODUCT BY :ID

let getOneItem = async (req, res) => {
  try {
    let product = await Products.findById(req.params.id);

    // checking if no product
    if (!product) {
      return res.status(404).json({
        status: "failed",
        message: " not found",
      });
    } else {
      return res.status(200).json({
        status: "successful",
        data: product,
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "unsuccessful",
      message: "error",
      error: error.message,
    });
  }
};


// deleting all product

let deleteAllProduct = async(req, res) => {
  try {
    let data = await Products.deleteMany();
    if (data.length === 0) {
      return res.status(200).json({
        status: "fail",
        message: "no product yet",
      });
    }
    res.status(200).json({
      status: "success",
      message: "deleted all products",
    });
  } catch (error) {
      res.status(500).json({
        status: "error",
        message: "error",
        error: error.message
      });
  }

}

// EXPORTTING ALL FUNCTIONS

module.exports = {
  addProduct,
  getOneItem,
  getAllProduct,
  deleteAllProduct,
};
