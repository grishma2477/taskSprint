import { createTask, deleteTask, getAllTasks, getTasksById, getVitalTasks, taskStats, toggleVitalTask, updateTask, updateVitalTask } from "../controllers/taskController.js";
import express from "express";
import { verifyuser } from "../middleware/auth.js";

const router = express.Router();

router.get("/stats", verifyuser, taskStats);

router.get("/", verifyuser, getAllTasks);
router.get("/vitals", verifyuser, getVitalTasks);
router.patch("/vitals/toggle/:id", verifyuser, toggleVitalTask)
router.put("/vitals/:id", verifyuser, updateVitalTask);
router.get("/:id", verifyuser, getTasksById);
router.post("/", verifyuser, createTask);
router.put("/:id", verifyuser, updateTask);
router.delete("/:id", verifyuser, deleteTask);


export default router;