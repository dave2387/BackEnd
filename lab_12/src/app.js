import express from "express"
import userRoutes from "./routes/user.route.js"
import { dbConnect  } from "./config/db.js";
import dotenv from 'dotenv'
dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();
dbConnect();
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/librerians", userRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));