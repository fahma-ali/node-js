const express = require('express');
const { getUsers, getSingleUser, createUser, updateUsers, deleteUser } = require('../controllers/usersController');
const router = express.Router();
router.get("/", getUsers);
router.get('/:id', getSingleUser)
router.post("/create", createUser);
router.put('/update/:id', updateUsers)
router.delete('/delete/:id',deleteUser)
module.exports = router;