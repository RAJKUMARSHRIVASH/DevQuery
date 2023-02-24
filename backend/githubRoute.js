const express = require("express");
const githubRoute = express.Router();
const fetch = require("node-fetch")
require("dotenv").config()

//---------body-parser------//
const bodyparser = require("body-parser")
githubRoute.use(bodyparser.urlencoded({
    extended:true
})
)

const path = require("path");
const mainfolder = path.join(__dirname,"../")
githubRoute.use(express.static(mainfolder+"/frontend"))
githubRoute.get("/login",(req, res) => {
  res.sendFile(mainfolder+"/frontend/register.html")

})



const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET

githubRoute.get("/github",async (req, res) => {
  const{code} = req.query
  // console.log(code)
  const accessToken = await fetch("https://github.com/login/oauth/access_token",{
    method:"POST",
    headers:{
      "content-type":"application/json",
      Accept:"application/json"   
     },
     body: JSON.stringify({
      client_id : CLIENT_ID,
      client_secret : CLIENT_SECRET,
      code : code
     })  
  }).then((res)=>res.json())

  // console.log(accessToken)

  const userDetails = await fetch("https://api.github.com/user", {
    headers : {
        Authorization: `Bearer ${accessToken.access_token}`
    }
}).then((res) => res.json())
  console.log(userDetails.name)
  res.redirect("http://localhost:8000/auth/index.html")
  
})


// githubRoute.get("/data",(req,res)=>{
//   const data = req.cookies.data
//   console.log(data)
//   res.json(data)
 
// })




module.exports = {githubRoute}