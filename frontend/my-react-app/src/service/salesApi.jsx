// GET ALL SALES
let getAllSales = async (url) => {
  try {
    let response = await fetch(url);
    let data = await response.json();
    return data;
  } catch (error) {
    console.error("could not get sales", error);
  }
};

// CREATE SALES

let createSale = async (url, saleData) => {
  try {
    let response = await fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(saleData),
    });

    //checking response
    if (!response.ok) {
      throw new Error(`server response status ${response.ok}`);
    }

    let feedback = "this sale is added";
    return feedback;
  } catch (error) {
    console.error("could not create sale", error);
  }
};

// DELETE SALE

let deleteSale = async (url, deleteData) => {
  try {
    let response = await fetch(url, {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(deleteData),
    });

    //checking response
    if (!response.ok) {
      throw new Error(`server response status ${response.ok}`);
    }

    let feedback = "this sale is deleted";
    return feedback;
  } catch (error) {
    console.error("could not create sale", error);
  }
};
 module.exports = {
   getAllSales,
  createSale,
   deleteSale,
};
