require('dotenv').config()
const { v4: uuidv4 } = require('uuid');
const {UserModel} = require("../model/UserModel")
const Passport = require("passport")


const facebookStrategy = require("passport-facebook").Strategy

Passport.use(new facebookStrategy({
    clientID:process.env.FACEBOOK_CLIENT_ID, 
    clientSecret:process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL:"https://devquery.onrender.com/auth/facebook/callback" 
},
async function(accessToken,refreshToken,profile,done){
    //  console.log(profile)
    let email = profile._json.email
    let name = profile._json.name
    let payload = {
      "username":name,
      "token":accessToken
    }
    // console.log(payload)
    let x = await UserModel.findOne({email});
    if(x){
      return done(null, payload);
    }
   const user = new UserModel({
    name,
    email,
    password: uuidv4()
   })
   await user.save();
    return done(null, payload);
  }



))

module.exports = Passport;



