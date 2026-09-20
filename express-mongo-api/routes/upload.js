import express from 'express';
import { upload } from '../middlewares/upload.js';
import { protect } from '../middlewares/auth.js'
    import { uploadFile } from "../controllers/upload.js";
;
const router = express.Router();
router.post("/profile-picture", protect, upload.single("file"), uploadFile);

export default router;