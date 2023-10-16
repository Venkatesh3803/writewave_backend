import express from "express"
import { deleteUser, getAllUsers, getSingleUsers, updateUser } from "../controllers/userController.js";
import { verifyToken } from "../middleware/verifyjwt.js";
const route = express.Router();

route.patch("/:id", verifyToken, updateUser)
route.delete("/:id", verifyToken, deleteUser)
route.get("/", getAllUsers)
route.get("/single/:id", getSingleUsers)

export default route