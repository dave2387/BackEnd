import bcrypt from "bcrypt";
import User from "../models/librerian.model.js";
import generateToken from "../utils/generateToken.js";
import dotenv from 'dotenv'
dotenv.config()
export const registerLibrerian = async (req, res) => {
    try {
        const { name, email, password, phone } = req.body;

        const librerianExists = await User.findOne({ email });
        if (librerianExists) {
            return res.status(400).json({ message: "Librerian already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword);

        const Librerian = await User.create({
            name,
            email,
            password: hashedPassword,
            phone,
        });

        res.status(201).json({
            message: "Librerian registered successfully",
            user,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export const loginLibrerian = async (req, res) => {
    try {
        const { email, password } = req.body;

        const Librerian = await Librerian.findOne({ email });
        if (!Librerian) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        const isMatch = await bcrypt.compare(password, Librerian.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }


        const token = await generateToken(Librerian.id)


        res.json({
            message: "Login successful",
            token: token,
            user: {
                id: Librerian._id,
                name: Librerian.name,
                email: Librerian.email,
                phone: Librerian.phone,
            },
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getAllLibrerian = async (req, res) => {
    try {
        const Librerians = await Librerian.find().select("-password");
        res.json(Librerians);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getLibrerianById = async (req, res) => {
    try {
        const Librerian = await Librerian.findById(req.params.id).select("-password");

        if (!Librerian) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json(Librerian);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateLibrerian = async (req, res) => {
    try {
        const updatedLibrerian = await Librerian.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        ).select("-password");

        if (!updatedLibrerian) {
            return res.status(404).json({ message: "Librerian not found" });
        }

        res.json({
            message: "Librerian updated successfully",
            updatedLibrerian,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteLibrerian = async (req, res) => {
    try {
        const deletedLibrerian = await User.findByIdAndDelete(req.params.id);

        if (!deletedLibrerian) {
            return res.status(404).json({ message: "Librerian not found" });
        }

        res.json({ message: "Librerian deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
