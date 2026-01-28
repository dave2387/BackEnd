import express from "express";
import {
  registerLibrerian,
  loginLibrerian,
  getAllLibrerian,
  getLibrerianById,
  updateLibrerian,
  deleteLibrerian,
} from "../controllers/user.controler.js";

import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/register", registerLibrerian);
router.post("/login", loginLibrerian);
router.get("/", verifyJWT, getAllLibrerian);
router.get("/:id", verifyJWT, getLibrerianById);
router.put("/:id", verifyJWT, updateLibrerian);
router.delete("/:id", verifyJWT, deleteLibrerian);

export default router;