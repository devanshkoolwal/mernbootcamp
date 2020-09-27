require('dotenv').config()

const mongoose =require("mongoose");
const express=require("express");
const app =express();


// mongoose.connect("mongodb://localhost:27017/test",
// {useNewUriParser:true});

mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log("DB CONNECTED")
});

const port= process.env.PORT || 8000;

app.listen(port, ()=> {
    console.log(`app is running at ${port}`);
})