import bcrypt from "bcryptjs";
import { asyncHandler } from "../middleware/asyncHandler.js"
import User from "../models/User.js";
import { failure, success } from "../utils/ApiResponse.js";

export const getProfile = asyncHandler(async (req,res)=>{
    console.log("frontend bhata call bhayo.");
    
const id= req.user._id;
const user = await User.findById(id).select("-password");

console.log(user);


if (!user){
    return failure(404, "User not found.")
}
res.status(200).json(success("Profile fetched successfully.", user));
})

export const updateProfileById = asyncHandler(async (req,res) => {
    const userId = req.user._id;
 const {firstName, lastName, phone, userName, profileImage} = req.body;

   // If username included, check if it already exists
    if (userName) {
        const existingUser = await User.findOne({ userName });
        
        if (existingUser && existingUser._id.toString() !== userId.toString()) {
            return (failure(409, "Username already taken."));
        }
    }

 const updatedUser = await User.findByIdAndUpdate(userId, {firstName, lastName, phone, userName, profileImage}, {new:true}).select("-password");
 if (!updatedUser){
    return failure(404, "User not found.");
 }
 res.status(200).json(success("Profile updated successfully.", updatedUser));
})

export const updatePassword = asyncHandler(async (req, res) => {
    const userId = req.user._id;
    const {oldPassword, newPassword} = req.body;

    if (!oldPassword || !newPassword){
        return failure(400, "Both old and new password are required.");
    }

    const user = await User.findById(userId).select("+password");
    if (!user){
        return failure(404, "User not found.");
    }

    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch){
        return failure(401, "Old password is incorrect.");
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    res.status(200).json(success("Password updated successfully."));
})

export const deleteProfile = asyncHandler(async (req,res) => {
    const id = req.user._id;
    const isProfileExists = await User.findByIdAndDelete(id);
    if (!isProfileExists){
        return failure(404, "User not found.");
    }
    res.status(200).json(success("Deleted user successfully."));
})