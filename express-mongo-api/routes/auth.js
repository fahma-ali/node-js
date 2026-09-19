import express from "express";
import { login, register } from "../controllers/auth.js";
import { protect } from "../middlewares/auth.js";
import { validate } from "../middlewares/validateZod.js";
import { createUserSchema } from "../schemas/userSchema.js";
const router = express.Router();
router.post("/register",validate(createUserSchema), register);
router.get("/login", login);
router.get("/profile", protect, (req, res) => {
  res.json(`welcome protected profile`);
  console.log(`user info  ${req.user}`);
});
export default router;
