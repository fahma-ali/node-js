import express from 'express';
import { createTask } from '../controller/taskController.js';
import { protect } from '../middleWare/auth.js';
const router = express.Router();
router.post('/',protect, createTask)

export default router