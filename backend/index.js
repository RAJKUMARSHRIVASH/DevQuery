const express = require("express");
const app = express();
require('dotenv').config();
const connection = require("./config/db");
const userRoute = require("./routes/userRoute");

app.use(express.json());




app.listen(process.env.port,async()=>{
    try {
        await connection;
        console.log('Connected to the DB Successfully.');
    } catch (error) {
        console.log('Something went wrong '+error);
    }
    console.log(`Server is running at the port ${process.env.port}`);
});