import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    info: {
        type: String,
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
    profession: {
        type: String,
    },
}, { timestamps: true })


export default mongoose.model("user", userModel)