const express = require("express");
const quesRoute = express.Router();
const { QuesModel } = require("../model/questionModel");
const {authenticate} = require("../middleware/authenticate")


quesRoute.get("/", async (req, res) => {
    let data = await QuesModel.find()
    res.send(data)
})
quesRoute.get("/:id", async (req, res) => {
    let q = req.params.id
    let data = await QuesModel.findById(q)
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
    console.log("here")
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
quesRoute.post("/addans",authenticate, async (req, res) => {
    const quesID = req.params.id;
    const {name,answer, user_ID} = req.body;
    try {
        const new_question = new QuesModel({
            name,
            question,
            user_ID
          });
         await new_question.save();
         res.send("Question Posted!")
    } catch (error) {
       console.log(error) 
    }
})





module.exports = { quesRoute };