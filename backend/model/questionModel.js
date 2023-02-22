const mongoose = require('mongoose');


const quesSchema = mongoose.Schema({
    author: {type: String, required:true},
    question: {type:Object,required:true},
    user_ID: {type:String,required:true},
    answer:{type:Array,default:[]},
    posted: {type: Date, default: Date.now}
});

const QuesModel = mongoose.model("question", quesSchema);


module.exports = {
    QuesModel
}