const mongoose = require('mongoose');


const quesSchema = mongoose.Schema({
    name: {type: String, required:true},
    question: {type:Object,required:true},
    userID: {type:String,required:true},
    answer:{type:Array,default:[]},
    posted: {type: Date, default: Date.now}
});

const QuesModel = mongoose.model("question", quesSchema);


module.exports = {
    QuesModel
}