var express = require('express')
var router = express.Router()
const { check, validationResult } = require('express-validator');
const {signout, signup, signin, isSignedIn} = require("../controllers/auth")



router.post("/signup",[
    check("name","name should be atleast 3 char").isLength({min: 3}),
    check("email","Email is req").isEmail(),
    check("password","Password should be 3 char").isLength({min: 3})
] ,signup);

router.get("/signout", signout);

router.post("/signin",[
    check("email","Email is reqired").isEmail(),
    check("password","Password field is required").isLength({min: 3})
] ,signin);

// router.get("/testroute", isSignedIn ,(req,res) =>{
//     res.json(req.auth);
// });

module.exports=router;
