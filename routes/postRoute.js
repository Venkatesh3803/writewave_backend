import express from "express"
import { verifyToken } from "../middleware/verifyjwt.js";
import { createPost, deletePost, getAllPosts, getSinglePost, getUserPost, updatePost } from "../controllers/postController.js";
const route = express.Router();

route.post("/", verifyToken, createPost)
route.delete("/:id", verifyToken, deletePost)
route.patch("/:id", verifyToken, updatePost)
route.get("/:id", getSinglePost)
route.get("/", getAllPosts)
route.get("/:id", getUserPost)


export default route