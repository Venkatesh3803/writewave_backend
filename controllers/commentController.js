import commentsModel from "../models/commentModel.js"


export const createComments = async (req, res) => {
    const newComment = await commentsModel(req.body)
    try {
        const comment = await newComment.save()
        res.status(201).json(comment)
    } catch (error) {
        res.status(500).json(error.message)
    }
}


export const updateComment = async (req, res) => {

    try {
        const currComment = await commentsModel.findByIdAndUpdate(req.params.id, req.body)
        if (!currComment) return res.status(401).send("You are not Authorized")
        res.status(201).json("Updated Sucessfully")
    } catch (error) {
        res.status(500).json(error.message)
    }
}


export const deleteComment = async (req, res) => {
    try {
        const currComment = await commentsModel.findByIdAndDelete(req.params.id)
        if (!currComment) return res.status(401).send("You are not Authorized")
        res.status(201).json("deleted Sucessfully")
    } catch (error) {
        res.status(500).json(error.message)
    }
}




export const getComment = async (req, res) => {
    try {
        const comments = await commentsModel.find({ postId: req.params.id })
        res.status(201).json(comments)
    } catch (error) {
        res.status(500).json(error.message)
    }
}