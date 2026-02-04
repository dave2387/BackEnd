import express from "express";
import dotenv from "dotenv";

import { dbConnect } from "./config/db.js";
import userRoutes from "./routes/user.route.js";

const PORT = process.env.PORT || 5000;
const app = express();
dotenv.config();
dbConnect();

app.use(express.json());
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Server is running...");
});


app.listen(PORT, () =>
  console.log(` Server running on port ${PORT}`)
);
