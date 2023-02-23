const express = require("express");
const quesRoute = express.Router();
const { QuesModel } = require("../model/questionModel");
const {authenticate} = require("../middleware/authenticate")


quesRoute.get("/", async (req, res) => {
    let data = await QuesModel.find()
    res.send(data)
})

quesRoute.get("/sortbydescending", async (req, res) => {
    let data = await QuesModel.find().sort({posted:-1})
    res.send(data)
})

quesRoute.get("/sortbyascending", async (req, res) => {
    let data = await QuesModel.find().sort({posted:1})
    res.send(data)
})

quesRoute.post("/addquestion",authenticate, async (req, res) => {
    const {name, question, userID} = req.body;
    try {
        const new_question = new QuesModel({
            name,
            question,
            userID
          });
         await new_question.save();
         res.json(new_question)
    } catch (error) {
       console.log(error) 
    }
})

quesRoute.post("/addans/:id",authenticate, async (req, res) => {
    const quesID = req.params.id;
    const {name, answer, userID, questionaskerID} = req.body;
    if(userID == questionaskerID){
        res.json({"mas": "You cann't answer your own questions"})
    }
    try {
        const add_ans = await QuesModel.updateOne({ "_id": quesID}, {$push: {"answer": {name, answer, userID}}})
        res.json(add_ans)
    } catch (error) {
       console.log(error) 
    }
})


quesRoute.get("/:id", async (req, res) => {
    let q = req.params.id
    let data = await QuesModel.findById(q)
    res.send(data)
})






module.exports = { quesRoute };