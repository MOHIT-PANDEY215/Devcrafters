const express =require('express')

require('./db/conn')

const app=express();

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

app.listen(port,()=>{
    console.log(`Server listening on port http://localhost:${port}`)
})