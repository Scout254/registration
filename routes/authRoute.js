import express from 'express';
import { deleteUser, getUser, getUsers, login, register, updateUser } from '../controllers/authController.js';
const router = express.Router();
router.post("/register",register)
router.post("/login",login)
router.get("/",getUsers)
router.get("/:id",getUser)
router.put("/:id",updateUser)
router.delete("/:id",deleteUser)

export default router