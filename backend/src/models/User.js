import mongoose from "mongoose";
import { Constant } from "../utils/Constant.js";

const userSchema = new mongoose.Schema({
firstName:{
    type:String,
    required:true
},
lastName:{
    type:String,
    required:true
},
userName:{
    type:String,
    required:true,
    unique:true
},
email:{
    type:String,
    required:true,
    unique:true
},
phone:{
    type:String
},
address:{
        type:String,
        trim:true
    },
password:{
    type:String,
    required:true,
    select:false
},
profilePicUrl:String,
role:{
    type:String,
    enum:[Constant.ROLE_USER, Constant.ROLE_ADMIN],
    default:Constant.ROLE_USER
}
})

export default mongoose.model(Constant.USER_MODEL, userSchema)