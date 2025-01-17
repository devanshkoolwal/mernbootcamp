require('dotenv').config()

const mongoose =require("mongoose");
const express=require("express");
const app =express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");


// mongoose.connect("mongodb://localhost:27017/test",
// {useNewUriParser:true});

mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log("DB CONNECTED")
});



app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());


app.use("/api", authRoutes);
app.use("/api", userRoutes);

const port= process.env.PORT || 8000;

app.listen(port, ()=> {
    console.log(`app is running at ${port}`);
})