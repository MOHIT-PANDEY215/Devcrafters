const {register,login}=require("../controllers/authController")
const router =require("express").Router();

router.get("/register",(req,res)=>{
    res.json({msg:"register"})
})
router.get("/login",(req,res)=>{
    res.json({msg:"login"})
})


router.post("/register",register)
router.post("/login",login)

module.exports=router