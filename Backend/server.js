import express from 'express'
import cors from 'cors'
import 'dotenv/config'

//app config
const app = express();
const port = process.env.PORT || 4000

//middlewares
app.use(express.json())
app.use(cors())

//api endpoints 

app.get('/',(req,res)=>{
    res.send("API working")//whenever we will open port 4000 it will show api working message
})
//starting the express server
app.listen(port,()=>console.log('Server started on PORT:' +port))