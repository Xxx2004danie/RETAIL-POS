const app = require('./app.js');
const mongoose = require('mongoose');

// CONNECT DATABASE 
let DB  = process.env.DATABASE.replace("<db_password>", process.env.DATABASE_PASSWORD)

 mongoose.connect(DB).then(() =>{
console.log("db connected successfully")
}).catch((err) => {
    console.log("db failed to connect", err)
})


    
let port = process.env.PORT 
// STARTING SERVER 
app.listen(port , (err) => {
    console.log("starting server...");
});



