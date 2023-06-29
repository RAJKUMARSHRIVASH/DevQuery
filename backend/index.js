//-----------express-----------//
const express = require("express");
const app = express();
app.use(express.json());
const jwt = require("jsonwebtoken");
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
const path = require('path')

//-----------routes----------//
const userRoute = require("./routes/userRoute");
app.use("/users", userRoute);
const { quesRoute } = require("./routes/quesRoute")
app.use("/questions", quesRoute)
const { githubRoute } = require("./githubRoute");
app.use("/auth", githubRoute)


//---------- google Oauth--------//

const passport = require("./config/google-Oauth")
app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback',
    passport.authenticate('google', {
        // successRedirect: `https://devquery.netlify.app/`,
        failureRedirect: 'https://devquery.netlify.app/html/login.html',
        session: false
    }),
    function (req, res) {
        // Successful authentication, redirect home.

        const token = jwt.sign({ userID: req.user._id, name: req.user.name }, process.env.key)

        res.redirect(`https://devquery.netlify.app?name=${req.user.name}&token=${token}`)
    });

//----------------Facebook Oauth----------//

const Passport = require("./config/facebook-Oauth")

app.get("/auth/facebook", Passport.authenticate("facebook", {
    scope: ["profile", "email"]
}))

app.get("/auth/facebook/callback",
    Passport.authenticate("facebook", {
        failureRedirect: "https://devquery.netlify.app/html/login.html",
        session: false
    }),
    function (req, res) {
        console.log(req.user)
        res.cookie(req.user)
        res.redirect("https://devquery.netlify.app/")
    });

// app.get("/",(req,res)=>{
//     app.use(express.static(path.join(__dirname,"../","frontend")));
//     res.sendFile(path.resolve(__dirname,"../","frontend","index.html"));
// })

//---------server------------//
app.listen(process.env.port, async () => {
    try {
        await connection;
        console.log('Connected to the DB Successfully.');
    } catch (error) {
        console.log('Something went wrong ' + error);
    }
    console.log(`Server is running at the port ${process.env.port}`);
});

