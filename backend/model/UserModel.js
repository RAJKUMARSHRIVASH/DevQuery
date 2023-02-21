const mongoose = require('mongoose');

// <<-------------------------Roll based access control System--------------->>
const userSchema = mongoose.Schema({
    name:String,
    email:String,
    password:String,
    role :{
        type : String, enum : ["User","Developer","Admin"], default : "User"
    }
});

const UserModel = mongoose.model("user",userSchema);

module.exports = {
    UserModel
}