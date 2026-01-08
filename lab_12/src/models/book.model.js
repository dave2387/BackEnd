import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
    {
        bookID: {
            type: String,
            required: true,
        },
        issueDate: {
            type: Date,
            default: Date.now
        },
        dueDate: {
            type: Date,
            required: true
        },
        returnDate: {
            type: Date,
            default: null
        },
        fine: {
            type: Number,
            default: 0
        }
    },
    { timestamps: true }
);

const User = mongoose.model("Book", bookSchema);
export default User;