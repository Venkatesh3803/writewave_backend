import mongoose from "mongoose";

const commentModel = new mongoose.Schema({
    postId: {
        type: String,
        require: true,
    },
    userId: {
        type: String,
        require: true,
    },
    comment: {
        type: String,
        require: true,
    },
}, { timestamps: true })


export default mongoose.model("comment", commentModel)