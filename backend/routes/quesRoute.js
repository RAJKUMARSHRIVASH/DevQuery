const express = require("express");
const quesRoute = express.Router();
const { QuesModel } = require("../model/questionModel");


quesRoute.get("/", async (req, res) => {
    let data = await QuesModel.find()

    res.send(data)
})

quesRoute.post("/addquestion", async (req, res) => {
    const {author, question, user_ID} = req.body;
    try {
        
    } catch (error) {
       console.log(error) 
    }
})



module.exports = { quesRoute };