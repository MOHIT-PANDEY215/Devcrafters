const express =require('express')
const cors=require('cors')
const authRoute=require("./routes/AuthRoute")
require('./db/conn')
require('dotenv').config()
const cookieParser = require("cookie-parser")
const app=express();

const port =process.env.PORT ||5000


app.listen(port,()=>{
    console.log(`Server listening on port http://localhost:${port}`)
})

app.use(cors({
    origin:["http://localhost:3000"],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true,
}));

app.use(cookieParser())
app.use(express.json());

app.use("/",authRoute)
app.get("/",(req,res)=>{
    console.log('f')
    res.json({msg:"hello there"})
})