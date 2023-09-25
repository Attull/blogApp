import Express from "express";
import userRoute from "./routes/userRoute.js";
import dotenv from "dotenv"
import mongoose from "mongoose";
const app =  Express()

dotenv.config()

app.use(Express.json())

app.use(userRoute)


mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    app.listen(5000,()=>{
        console.log("Listening to PORT 5000")
    })
}).catch((err)=>{
    console.log("connection failed", err)
})

