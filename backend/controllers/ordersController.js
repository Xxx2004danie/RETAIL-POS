const Sales = require("../models/pastOrdersModels")

// GETTING ALL SALES

let getAllSales = async () => {
    try {
        let allSales = await Sales.find();
        // if no sales
        if (allSales.length === 0) {
             res.status(404).json({
               status: "successful",
               message:  "sales not found",
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
            error: error.message
        }
        )
     }
}

// DELETE SALES BY :ID
let deleteOneSales = async (req, res) => {
    try {
        await Sales.findByIdAndDelete(req.params.id);
          res.status(200).json({
            status: "successful",
            message: "this sales is deleted",
          });
    } catch (error) {
         res.status(500).json({
           status: "unsuccessful",
           message: "error from the server",
           error: error.message,
         }); 
    }
}

module.exports = {
  getAllSales,
  deleteOneSales,
};