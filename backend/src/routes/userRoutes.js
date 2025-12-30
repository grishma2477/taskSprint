import express from "express";
import { verifyuser } from "../middleware/auth.js";
import { deleteProfile, getProfile, updatePassword, updateProfileById } from "../controllers/userController.js";

const router = express.Router();

router.get("/", verifyuser, getProfile);
router.put("/", verifyuser, updateProfileById);
router.put("/update-password", verifyuser, updatePassword);
router.delete("/delete", verifyuser, deleteProfile);

export default router;