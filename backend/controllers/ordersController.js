const Sales = require("../models/pastOrdersModels")






// create sales

let createSales = async (req, res) => {
  try {
    let saleData = req.body
    let Data = await Sales.create(saleData);
    // if no sales
    if (saleData.length === 0) {
      return res.status(200).json({
        status: "fail",
        message: "no data",
      });
    }
    res.status(200).json({
      status: "success",
      message : "done"
    });
  } catch (error) {
    res.status(500).json({
      status: "unsuccessful",
      message: "error from the server",
      error: error.message,
    });
  }
};

// GETTING ALL SALES

let getAllSales = async (req, res) => {
  try {
    let allSales = await Sales.find();
    // if no sales
    if (allSales.length === 0) {
      return res.status(200).json({
        status: "successful",
        message: "no sales yet",
        Sales: allSales,
      });
    }
    res.status(200).json({
      status: "successful",
      Sales: allSales,
    });
  } catch (error) {
    res.status(500).json({
      status: "unsuccessful",
      message: "error from the server",
      error: error.message,
    });
  }
};

// DELETE SALES BY :ID
let deleteOneSales = async (req, res) => {
  try {
    await Sales.findByIdAndDelete(req.params.id);

    if (!req.params.id) {
      return res.status(400).json({
        status: "failed",
        message: "sales id is required",
      });
    }
    res.status(200).json({
      status: "success",
      message: "this sales is deleted",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "error from the server",
      error: error.message,
    });
  }
};

module.exports = {
   createSales,
  getAllSales,
  deleteOneSales,
};