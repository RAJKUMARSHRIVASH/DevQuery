const express = require("express");
const quesRoute = express.Router();
const { QuesModel } = require("../model/questionModel");
const { authenticate } = require("../middleware/authenticate")
const { validate } = require("../middleware/validate")


quesRoute.get("/", async (req, res) => {
    let data = await QuesModel.find();
    res.send(data)
})

quesRoute.get("/sortbydescending", async (req, res) => {
    let data = await QuesModel.find().sort({ posted: -1 })
    res.send(data)
})

quesRoute.get("/sortbyascending", async (req, res) => {
    let data = await QuesModel.find().sort({ posted: 1 })
    res.send(data)
})

quesRoute.get("/sortbyanswercount", async (req, res) => {
    let data = await QuesModel.aggregate([
        {
            "$project": {
                "name": 1,
                "question": 1,
                "userID": 1,
                "answer": 1,
                "posted": 1,
                "length": { "$size": "$answer" }
            }
        },
        { "$sort": { "length": -1 } }
    ]);
    console.log(data)
    res.send(data)
})

quesRoute.post("/addquestion", authenticate, async (req, res) => {
    const { name, question, userID } = req.body;
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

quesRoute.post("/addans/:id", authenticate, async (req, res) => {
    const quesID = req.params.id;
    const { name, answer, userID, time, like } = req.body;
    console.log(req.body)
    if (false) {
        res.json({ "mas": "You cann't answer your own questions" })
    }
    try {
        const add_ans = await QuesModel.updateOne({ "_id": quesID }, { $push: { "answer": { name, answer, userID, time, like } } })
        res.json(add_ans)
    } catch (error) {
        console.log(error)
    }
})


quesRoute.get("/:id",validate, async (req, res) => {
    let q = req.params.id
    let data = await QuesModel.findById(q);
    let own = false
    if(req.body.isLogged != false){
        if(req.body.userID == data.userID){
            own = true;
            res.json({data, own})
        }else{
            res.json({data})
        }
    }else{
        res.json({data})
    }
    
})






module.exports = { quesRoute };