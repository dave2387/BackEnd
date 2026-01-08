import express from "express";
import {
  registerUser,
  loginUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/user.controler.js";

import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/", verifyJWT, getAllUsers);
router.get("/:id", verifyJWT, getUserById);
router.put("/:id", verifyJWT, updateUser);
router.delete("/:id", verifyJWT, deleteUser);

export default router;