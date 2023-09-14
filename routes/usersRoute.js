import express from "express"
import { deleteUser, getAllUsers, getSingleUsers, updateUser } from "../controllers/userController.js";
import { verifyToken } from "../middleware/verifyjwt.js";
const route = express.Router();

route.patch("/", verifyToken, updateUser)
route.delete("/:id", verifyToken, deleteUser)
route.get("/", getAllUsers)
route.get("/single", verifyToken, getSingleUsers)

export default route