import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    contact: {
        type: String,
        required: true,
        trim: true,
        isNumeric: true
    },
    profile: {
        imageName: String,
        address: String
    }
    , isVerify: {
        type: Boolean,
        default: false
    }
}, { versionKey: false })

export const User = mongoose.model("user", userSchema)