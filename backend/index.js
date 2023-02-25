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


    //---------- google Oauth--------//

const passport = require("./config/google-Oauth")
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile','email'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', {
     failureRedirect: 'http://localhost:8000/auth/login.html',
     session:false }),
  function(req, res) {
    // Successful authentication, redirect home.
    // console.log(req.user)
    res.redirect('http://localhost:8000/auth/index.html');
  });

      //----------------Facebook Oauth----------//

    const Passport = require("./config/facebook-Oauth")

  app.get("/auth/facebook",Passport.authenticate("facebook",{
      scope:["profile","email"]
  }))
  
app.get("/auth/facebook/callback",
    Passport.authenticate("facebook",{
        successRedirect:"http://localhost:8000/auth/index.html",
        failureRedirect:"http://localhost:8000/auth/index.html",
        session:false
    }),
    function(req, res) {
          //console.log(req.user)
      });    


            //---------server------------//
app.listen(process.env.port,async()=>{
    try {
        await connection;
        console.log('Connected to the DB Successfully.');
    } catch (error) {
        console.log('Something went wrong '+error);
    }
    console.log(`Server is running at the port ${process.env.port}`);
});

