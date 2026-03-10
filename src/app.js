const express = require('express');

const app = express();
app.use(express.json());

const notes = [];

app.post('/notes',(req,res)=>{
    const {title , detail} = req.body;
    notes.push({title,detail});
    res.status(201).json({
        "message" : "notes created successfully"
    })
})

app.get('/notes',(req,res)=>{
    res.status(200).json({
        message : "notes data feteched successfully",
        notes : notes
    })
})

app.delete('/notes/:index',(req,res)=>{
    const idx = req.params.index;
    notes.splice(idx,1); 
    res.status(200).json({
        message : "note deleted successfully"
    })
})

app.patch('/notes/:index',(req,res)=>{
    const idx = req.params.index;
    notes[idx].detail = req.body.des;
    notes[idx].title = req.body.title;
    res.status(200).json({
        message : "Notes updated successfully"
    })
})


module.exports = app;