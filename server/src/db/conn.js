const mongoose =require('mongoose')
require('dotenv').config()

const url=process.env.MONGO_URL||'mongodb+srv://pandeymohit215:bsPW5qjhzla2eoJl@cluster0.iuuiqfc.mongodb.net/devcrafters?retryWrites=true&w=majority'


mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('mongo success')
}).catch((e)=>{
    console.log('no success mongo')
})