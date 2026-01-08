import { Router } from "express";
import bcrypt from "bcrypt";
import User from "../model/user.model.js";
import { verifyJwt } from "../middlewares/verifyJwt.js";
import { generateToken } from "../services/generateToken.js";

const router = Router();

router.post("/register", async (req, res) => {
    try {
        const { name, email, password, phone } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                message: "name, email and password are required",
            });
        }

        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(409).json({
                message: "User already exists",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
            phone,
        });

        res.status(201).json({
            message: "User registered successfully",
            data: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                phone: newUser.phone,
            },
        });
    } catch (error) {
        res.status(500).json({
            message: "Error while registering user",
        });
    }
});

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "email and password are required",
            });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({
                message: "User not found, please register",
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid password",
            });
        }

        const token = generateToken(user._id);

        res.status(200).json({
            message: "Login successful",
            token,
        });
    } catch (error) {
        res.status(500).json({
            message: "Login failed",
        });
    }
});

router.get("/all", verifyJwt, async (req, res) => {
    try {
        const users = await User.find().select("-password");

        res.status(200).json({
            message: "Users fetched successfully",
            data: users,
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch users",
        });
    }
});

export default router;
