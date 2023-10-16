import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
    },
    profilePic: {
        type: String,
    },
    livesIn: {
        type: String,
    },
    status: {
        type: String,
    },
    gender: {
        type: String,
    },
}, { timestamps: true })


export default mongoose.model("user", userModel)