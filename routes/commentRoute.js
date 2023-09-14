import express from "express"
import { verifyToken } from "../middleware/verifyjwt.js";
import { createComments, deleteComment, getComment, updateComment } from "../controllers/commentController.js";
const route = express.Router();

route.post("/", verifyToken, createComments)
route.delete("/:id", verifyToken, deleteComment)
route.patch("/:id", verifyToken, updateComment)
route.get("/:id", getComment)

export default route