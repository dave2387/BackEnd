import express from "express";
import {
  registerUser,
  loginUser,
  addTask,
  updateTask,
  deleteTask
} from "../controller/user.controller.js";

import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/addtask",addTask);
router.delete("/:id",deleteTask);
router.patch("/:id",updateTask);

export default router;