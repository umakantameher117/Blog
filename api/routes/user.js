import { Router } from "express";
import { updateProfile,deleteProfile,getProfile } from "../controllers/user.js";
import isAuthenticated  from "../middlewares/auth.js";
const router = Router();

router.put('/:id',updateProfile)
router.delete('/:id',deleteProfile)
router.get('/:id',isAuthenticated ,getProfile)


export default router;