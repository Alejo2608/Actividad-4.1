const express=require("express");
const router=express.Router()

router.get("/users/singin",(req,res)=>{
    res.render("user/inicio");
});
router.get("/users/singup",(req,res)=>{
    res.render("user/regis")
}),
module.exports=router;