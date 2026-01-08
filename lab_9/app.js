import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

dotenv.config();

const MONGO_URL = "mongodb://localhost:27017/demo";

const app = express();
app.use(express.json());


const dbConnect = async () => {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("DB CONNECTED SUCCESSFULLY");
    } catch (err) {
        console.error(err);
    }
};

dbConnect();

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        mobile: { type: String }
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);

const generateToken = (id) => {
    return jwt.sign(
        { id },
        process.env.SECRET_TOKEN,
        { expiresIn: process.env.EXPIRE_TOKEN_TIME }
    );
};

const verifyJwt = async (req, res, next) => {
    try {
        const token = req.header("Authorization")?.split(" ")[1];
        if (!token) return res.json({ message: "Token missing" });

        const decoded = jwt.verify(token, process.env.SECRET_TOKEN);
        const user = await User.findById(decoded.id);

        if (!user) return res.json({ message: "Invalid token" });

        req.user = user;
        next();
    } catch (err) {
        res.json({ message: "Unauthorized" });
    }
};

app.post("/register", async (req, res) => {
    try {
        console.log(req.body);

        const { name, email, password, mobile } = req.body;

        if (!name || !email || !password) {
            return res.json({ message: "Please provide all required fields" });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.json({ message: "User already exists" });
        }

        const hashPass = await bcrypt.hash(password, 10);

        await User.create({
            name,
            email,
            password: hashPass,
            mobile
        });

        res.json({ message: "User created successfully" });
    } catch (err) {
        res.json({ error: err.message });
    }
});

app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) return res.json({ message: "User not found" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.json({ message: "Invalid password" });

        const token = generateToken(user._id);
        res.json({ message: "Login successful", token });
    } catch (err) {
        res.json({ error: err.message });
    }
});

app.get("/all", verifyJwt, async (req, res) => {
    const users = await User.find();
    res.json(users);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
