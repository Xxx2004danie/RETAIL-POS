const globalUrl = require("../constant/port");

// CREATING PRODUCT
let createProduct = async (postData) => {
    try {
        let response = await fetch(url, {
        method : "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body : JSON.stringify(postData)
        });

        // check error
        if (!response.ok) {
            throw new Error(`http error ${response.status}`)
        }

        let data = await response.json();

         return data;
        
    } catch (error) {
        console.error("could not create product" .error)
        
  }

};

// FETCHING ALL PRODUCT DATA FROM THE SERVER
let getAllProduct = async() => {
    try {
        let response= await fetch(url);
        let data = await response.json();
        return data
    } catch (error) {
        console.error("could not get products", error)
    }
}