const express =require('express')

require('./db/conn')

const app=express();
const cors=require('cors')

const {register ,login}=require('./controllers/authController')
require('dotenv').config()

app.use(cors());
app.use(express.json());

const port =process.env.PORT ||5000

app.get('/',(req,res)=>{
    res.json(
        {message: "hello there"}
    )
})
app.get('/register',(req,res)=>{
    res.json(
        {message: "register there"}
    )
})

app.post('/api/register',register)
app.post('/api/login',login)

app.listen(port,()=>{
    console.log(`Server listening on port http://localhost:${port}`)
    console.log(process.env.MONGO_URL)
})