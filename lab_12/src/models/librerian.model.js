import mongoose from "mongoose";

const librerianSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
        },
    },
    { timestamps: true }
);

const User = mongoose.model("Librerian", librerianSchema);
export default User;