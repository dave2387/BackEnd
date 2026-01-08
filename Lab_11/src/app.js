import express from "express";
import dotenv from "dotenv";
dotenv.config();
import userRoutes  from "./routes/user.routes.js";

export const app = express();

app.use(express.json());


app.use("/user", userRoutes);
