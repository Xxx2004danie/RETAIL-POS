const globalUrl = require('../constant/port');


// GET USERS
let getAllUsers = async () => {
    try {
        let response = await fetch(url);
        
        //checking http status
        if (!response.ok) {
            throw new Error(`server response status ${response.status}`)
        }

        let data = response.json();
        return data
        
    } catch (error) {
        console.error("could not get users", error)
    }
}

// CREATING USERS
let createUser = async (data) => {
    try{
        let response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type' : 'appication/json'
            },
            body : JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`server response status ${response.status}`)
        }

       let data = response.json();
        return data

    } catch(error) {
        console.error("could not create user", error)
    }
}

// DELETE USERS
let deleteUser = async (data) => {
    try { 
       let response = await fetch(URL, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw Error(`server response status ${response.status}`)
        }

        console.log('user successfully deleted')
    }
    catch (error) {
        console.error("could not delete user", error)
    }
}

