
let getAllSales = async () => {
    try {
        let response = await fetch(url);
        let data = await response.json();
        return data 
     }
    catch (error) {
        console.error("could not get sales", error)
    }
}