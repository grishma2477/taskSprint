import mongoose from "mongoose";
import { Constant } from "../utils/Constant.js"



export const startDbConnection = async ()=>{
    const connection = await mongoose.connect(Constant.MONGO_URL);
    return connection;
}