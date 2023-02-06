import express, { json } from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import authRoute from './routes/authRoute.js'
mongoose.set('strictQuery', true);
const app = express();
dotenv.config();

const connect = async()=>{
    try{
        mongoose.connect(process.env.MONGO);
        console.log("connected to mongoDB")
    }catch(error){
        throw error;
    }
}
mongoose.connection.on("disconnected",()=>{
    console.log("mongodb disconnected")
})
app.use(express.json())
app.listen(4000,()=>{
    connect();
    console.log("connected to backend")
})
//routes
app.use("/api/auth",authRoute)
//define errors
app.use((err,req,res,next)=>{
    const errorStatus = err.status ||500
    const errorMessage = err.message || "something went wrong"
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack
    })
})