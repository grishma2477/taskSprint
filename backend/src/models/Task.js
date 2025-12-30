import mongoose from "mongoose";
import { Constant } from "../utils/Constant.js";

const taskSchema = new mongoose.Schema({
title:{
    type:String, 
    required:true,
    trim:true,
},
 
description:{
    type: String,
    default: "",
},
isVital:{
  type:Boolean,
  default:false
},

priority: {
    type:String,
    enum: ["low", "moderate", "extreme"],
    default: "low",
},

status: {
    type:String,
    enum:["Not Started", "In Progress", "Completed"],
    default: "Not Started",
},

 owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Constant.USER_MODEL,
      required: true,
    },
  },
  {
    timestamps: true, // adds createdAt, updatedAt
  }
);

export default mongoose.model("Task", taskSchema);
