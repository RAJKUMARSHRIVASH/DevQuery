require('dotenv').config()

const Passport = require("passport")
const facebookStrategy = require("passport-facebook").Strategy


Passport.use(new facebookStrategy({
    clientID:process.env.FACEBOOK_CLIENT_ID, 
    clientSecret:process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL:"http://localhost:8000/auth/facebook/callback" 
},
function(accessToken,refreshToken,profile,done){
    return done(null,profile)
}


))

module.exports = Passport;



