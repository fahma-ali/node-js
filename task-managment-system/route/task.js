import express from 'express';
import { createTask, deleteTask, getMyTask, updateTask } from '../controller/taskController.js';
import { protect } from '../middleWare/auth.js';
const router = express.Router();
router.post('/',protect, createTask)
router.get("/", protect, getMyTask);
router.put("/:id", protect, updateTask);
router.delete("/:id", protect, deleteTask);

export default router