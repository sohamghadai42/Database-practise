require('dotenv').config();
const app = require('./src/app');
const connection = require('./src/config/database');

connection();
app.listen(3000, (req, res)=>{
    console.log("server started")
})