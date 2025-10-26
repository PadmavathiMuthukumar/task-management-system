import express from "express";
import {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
  getSummary
} from "../controllers/taskController.js";

const router = express.Router();

// CRUD + Analytics Routes
router.post("/", createTask);
router.get("/", getTasks);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);
router.get("/summary", getSummary);

export default router;
