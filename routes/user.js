const express = require("express");
const router = express.Router();

router.post("/register", (req, res)=>{
    res.status(200).json({msg: "register router"});
});

router.post("/login", (req, res)=>{
    res.status(200).json({msg: "login route"});
});

router.post("/profile", (req, res)=>{
    res.status(200).json({msg: "profile"});
});


module.exports = router;