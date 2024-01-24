const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")
const userRouter = require("./routers/userRouter")
dotenv.config()

mongoose.connect(
    process.env.MONGODB
).then(()=>console.log("Database connected"))
.catch((err) => {
    console.log(err);
})
const corsOptions = {
    origin: ['http://localhost:3000','http://localhost:5173' ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', 
    credentials: true,
  };

app.use(express.json())

app.listen(3000,()=>{
    console.log("server is running");
    
})

app.use("/api/user",cors(corsOptions), userRouter)

app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500
    const message = err.message || 'internal server error'
    
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    })
    })