import express from "express"
import userRoutes from "../src/routes/user.route.js"
import { dbConnect  } from "./config/db.js";


const PORT = process.env.PORT || 3000;
const app = express();
dbConnect();
app.use("/api/users", userRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));