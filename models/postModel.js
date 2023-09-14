import mongoose from "mongoose";

const postModel = new mongoose.Schema({
    userId: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },
    title: {
        type: String,
        require: true,
    },
    desc: {
        type: String,
    },
    shortDesc: {
        type: String,
    },
    category: {
        type: String,
        required: true
    },
}, { timestamps: true })


export default mongoose.model("post", postModel)