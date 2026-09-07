import express from 'express';
import { getUsers, getSingleUser, createUser, updateUsers, deleteUser } from '../controllers/usersController.js';
const router = express.Router();
router.get("/", getUsers);
router.get('/:id', getSingleUser)
router.post("/create", createUser);
router.put('/update/:id', updateUsers)
router.delete('/delete/:id',deleteUser)
export default router;