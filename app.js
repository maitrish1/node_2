const http = require("http");

const express = require("express");

const app = express();

app.use((req,res,next)=>{
    console.log('in the middleware')
    next() //Allows req to continue to next middleware
})

app.use((req,res,next)=>{
    console.log('in the middleware 2')
    res.send('<h1>HELLO Its me</h1>')
})

app.listen(3000);
