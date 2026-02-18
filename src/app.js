const express = require("express")

const app = express();
const noteModel = require("./models/notes.model")
app.use(express.json())
app.get('/', (req, res)=>{
    res.send("the server is started")
})

app.post("/notes", async(req, res)=>{
    const {title, description} = req.body;
    const note = await noteModel.create({
        title, description
    })
    res.status(201).json({
        message: "note created successfully",
        note
    })
})

app.get("/notes", async (req, res)=>{
    const notes = await noteModel.find()
    res.status(200).json({
        message: "notes fetched successfully",
        notes
    })
})

module.exports = app;