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
    const {author, question, user_ID} = req.body;
    try {
        
    } catch (error) {
       console.log(error) 
    }
})



module.exports = { quesRoute };