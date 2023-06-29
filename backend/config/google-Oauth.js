require('dotenv').config()
const passport = require("passport")
const { v4: uuidv4 } = require('uuid');
const {UserModel} = require("../model/UserModel")

const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "https://devquery.onrender.com/auth/google/callback"
  },
 async  function(accessToken, refreshToken, profile, cb) {
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
      return cb(null, x);
    }
   const user = new UserModel({
    name,
    email,
    password: uuidv4()
   })
   await user.save();
    return cb(null, user);
  }
  
));

module.exports = passport;