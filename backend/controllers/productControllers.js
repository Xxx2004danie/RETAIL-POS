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
      status: "unsuccessful",
      message: "error adding product",
      error: error.message,
    });
  }
};

// GETTING ALL PRODUCT

let getAllProduct = async (req, res) => {
  try {
    let { category } = req.query;

    // filtering by category
    let filter = {};
    if (filter) {
      filter.category = category;
    }

    // getting products
    let products = await Product.find(filter);

    // if no product is found
    if (products.length === 0) {
      res.status(404).json({
        status: "nothing found",
        message: "no items available",
      });
    } else {
      res.status(200).json({
        status: "successful",
        data: products,
      });
    }
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
    let product = Product.findById(req.params.id);

    // checking if no product
    if (!product) {
      res.status(404).json({
        status: "successful",
        message: "item not found",
      });
    } else {
      res.status(200).json({
        status: "successful",
        data: product,
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "unsuccesful",
      message: "error",
      error: error.message,
    });
  }
};

// EXPORTTING ALL FUNCTIONS

module.export = {
  addProduct,
  getOneItem,
  getAllProduct,
};
