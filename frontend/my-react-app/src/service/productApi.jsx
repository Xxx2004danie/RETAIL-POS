export let createProduct = async (url, postData) => {
  try {
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    // check error
    if (!response.ok) {
      throw new Error(`http error ${response.status}`);
    }

    let data = await response.json();

    return data;
  } catch (error) {
    console.error("could not create product".error);
  }
};

export let getAllProduct = async (url) => {
  try {
    let response = await fetch(url);

    // check error
    if (!response.ok) {
      throw new Error(`http error ${response.status}`);
    }

    let productObj = await response.json();
    return productObj;
  } catch (error) {
    console.error("Could not get all products:", error.message);
     throw error;
  }
};
