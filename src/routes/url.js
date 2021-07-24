const express=require("express");
const router=express.Router()

router.get("/add",(req,res)=>{
    res.render("url/newUrl")
})

router.post("/url/newUrl",(req,res)=>{
    console.log(req.body);
    res.send("Received")
})

router.get("/notes",(req,res)=>{
    res.send("Notes in database")
})

module.exports=router;