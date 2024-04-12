const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.status(200).json({
        message:"Plesae Nut first"
    })
})

app.listen(3000,(req,res)=>{
    console.log(`The app started on localhost 3000`)
})