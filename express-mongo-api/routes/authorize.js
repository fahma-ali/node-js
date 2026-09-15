import express from "express";
import { protect } from "../middlewares/auth.js";
const router = express.Router();
router.get('/dashboard',protect, (req, res) => {
    res.json("welcome protected route");
})
export default router