            //-----------express-----------//
const express = require("express");
const app = express();
app.use(express.json());

              //-----------dotenv-----------//
require('dotenv').config();

            //------------connection-----------//
const connection = require("./config/db");

             //------------cookie-parser------------//
const cookieParser = require("cookie-parser")  
app.use(cookieParser())           

            //----------cors-----------//
const cors = require('cors');
app.use(cors());


            //-----------routes----------//
const userRoute = require("./routes/userRoute");
app.use("/users",userRoute);
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

