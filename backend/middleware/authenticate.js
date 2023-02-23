const jwt = require("jsonwebtoken")
require("dotenv").config()
const fs = require("fs")

const authenticate = (req,res,next)=>{
    // const token = req.cookies.token;
    const token = req.headers.authorization
    // console.log(token)
    if(!token){
        res.json("login first")
    }else{
        const blacklistedData = JSON.parse(fs.readFileSync("./blacklistedData.json","utf-8"))
        if(blacklistedData.includes(token)){
             return res.json("token is blacklisted,plz login again")
        }else{
        try {
            const decode = jwt.verify(token,process.env.key)
            if(decode){
             const user_ID = decode.userID
            //  console.log(user_ID)
                 req.body.userID = user_ID;
                if(req.path == "/addquestion"){
                    req.body.name = decode.name;
                }
            //   const userRole = decode.role;
            // //   console.log(userRole)
            //   req.body.userrole = userRole
              next()
             }else{
                res.json("plz login")
             }
        } catch (error) {
            res.json({"err":error.message})
        }
    }
        
    }

}



module.exports = {authenticate}