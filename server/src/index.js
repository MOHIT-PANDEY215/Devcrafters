const express =require('express')

require('./db/conn')
require('dotenv').config()

const app=express();
const cors=require('cors')

const studentsRouter = require('./routes/student');
const {register ,login}=require('./controllers/authController')

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


// Mount the students router
app.use('/api/students', studentsRouter);


app.post('/api/register',register)
app.post('/api/login',login)

app.listen(port,()=>{
    console.log(`Server listening on port http://localhost:${port}`)
})