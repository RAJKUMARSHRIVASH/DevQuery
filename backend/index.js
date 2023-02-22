const express = require("express");
const app = express();
require('dotenv').config();
const connection = require("./config/db");
const userRoute = require("./routes/userRoute");
const cors = require('cors');


app.use(express.json());
app.use(cors());
app.get("/users",userRoute);
app.use("/questions",quesRoute)



app.listen(process.env.port,async()=>{
    try {
        await connection;
        console.log('Connected to the DB Successfully.');
    } catch (error) {
        console.log('Something went wrong '+error);
    }
    console.log(`Server is running at the port ${process.env.port}`);
});

// npm i express nodemon dotenv mongoose bcrypt socket.io jsonwebtoken cors env