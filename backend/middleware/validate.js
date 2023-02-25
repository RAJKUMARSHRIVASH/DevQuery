const jwt = require("jsonwebtoken")
require("dotenv").config()
const fs = require("fs")

const validate = (req,res,next)=>{
    const token = req.headers.authorization || false
    if(token == false){
        req.body.isLogged = false;
        next();
    }else{
        const blacklistedData = JSON.parse(fs.readFileSync("./blacklistedData.json","utf-8"))
        if(blacklistedData.includes(token)){
            req.body.isLogged = false;
             next()
        }else{
        try {
            jwt.verify(token,process.env.key, function(err, decoded) {
                if(err){
                    req.body.isLogged = false;
                    next(); 
                }else{
                    const user_ID = decoded.userID
                    req.body.userID = user_ID;
                    next()
                }
            });
        } catch (error) {
            res.json({"err":error.message})
        }
    }
        
    }

}



module.exports = {validate}