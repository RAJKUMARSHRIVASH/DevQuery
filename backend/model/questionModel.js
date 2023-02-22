const mongoose = require('mongoose');


const quesSchema = mongoose.Schema({
    question: String,
    name: String
});

const QuesModel = mongoose.model("question", quesSchema);


module.exports = {
    QuesModel
}