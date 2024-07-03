import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import dotenv from 'dotenv';

dotenv.config();

const connectDB=async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL,{
                useNewUrlParser: true,
                useUnifiedTopology: true, 
        })
        console.log("mongoDB connected....");

    } catch (error) {
        console.log("mongoDB connection failed",error);
        process.exit(1);
    }
}

export default connectDB