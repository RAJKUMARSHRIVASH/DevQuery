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
const { quesRoute } = require("./routes/quesRoute")
app.use("/questions",quesRoute)
const {githubRoute} = require("./githubRoute");
app.use("/auth",githubRoute)


    //---------- google auth--------//

const passport = require("./config/google-Oauth")
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile','email'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login', session:false }),
  function(req, res) {
    // Successful authentication, redirect home.
    // console.log(req.user)
    res.redirect('http://localhost:8000/auth/index.html');
  });



app.listen(process.env.port,async()=>{
    try {
        await connection;
        console.log('Connected to the DB Successfully.');
    } catch (error) {
        console.log('Something went wrong '+error);
    }
    console.log(`Server is running at the port ${process.env.port}`);
});

