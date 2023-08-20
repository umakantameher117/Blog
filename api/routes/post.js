import { Router } from "express";
import {createPost,updatePost,deletePost,getPost,getAllPost } from "../controllers/post.js";
import isAuthenticated from "../middlewares/auth.js";
const router = Router();

router.post('/',isAuthenticated,createPost)
router.put('/:id',isAuthenticated,updatePost)
router.delete('/:id',isAuthenticated,deletePost)
router.get('/:id',getPost)
router.get('/',getAllPost)


export default router;