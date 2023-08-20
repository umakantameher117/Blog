import { Router } from "express";
import { register,loginUser,logout } from "../controllers/auth.js";
const router = Router();

router.post("/register", register);
router.post("/login", loginUser);
router.post("/logout", logout);

export default router;
