const express = require("express");
const quesRoute = express.Router();
const { QuesModel } = require("../model/questionModel");
const {authenticate} = require("../middleware/authenticate")


quesRoute.get("/", async (req, res) => {
    let data = await QuesModel.find()

    res.send(data)
})

quesRoute.post("/addquestion", async (req, res) => {
    const {name, question, user_ID} = req.body;
    try {
        const new_question = new QuesModel({
            name,
            question,
            user_ID,
          });
         await new_question.save();
         res.send("posted question")
    } catch (error) {
       console.log(error) 
    }
})



module.exports = { quesRoute };