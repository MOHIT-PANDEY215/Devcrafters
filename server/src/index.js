const express =require('express')
const cors=require('cors')
const authRoute=require("./routes/AuthRoute")
require('./db/conn')
require('dotenv').config()
const cookieParser = require("cookie-parser")
const app=express();

const server = require('http').createServer(app);

const io =require("socket.io")(server,{
    cors:{
        origin:'*',
        methods: ["GET","POST"]
    }
})

const port =process.env.PORT ||5000


server.listen(port,()=>{
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

io.on('connection',(socket)=>{
    socket.emit('me',socket.id)

    socket.on('disconnect',()=>{
        socket.broadcast.emit("callended")
    })
    socket.on("calluser",({userToCall, signalData, from, name})=>{
        io.to(userToCall).emit("calluser",{signal:signalData, from,name})
    })
    socket.on("answercall",(data)=>{
        io.to(data.to).emit("callaccepted",data.signal)
    })
})