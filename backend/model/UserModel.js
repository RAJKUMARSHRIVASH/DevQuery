const mongoose = require('mongoose');

// <<-------------------------Role based access control System--------------->>
const userSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    question:{type:Array,default:[]},
    answer:{type:Array,default:[]}
});

const UserModel = mongoose.model("user",userSchema);

module.exports = {
    UserModel
}