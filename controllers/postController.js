import commentModel from "../models/commentModel.js"
import postModel from "../models/postModel.js"


export const createPost = async (req, res) => {
    const newPost = await postModel(req.body)
    try {
        const post = await newPost.save()
        res.status(201).json(post)
    } catch (error) {
        res.status(500).json(error.message)
    }
}


export const updatePost = async (req, res) => {

    try {
        const currPost = await postModel.findByIdAndUpdate(req.params.id, req.body)
        if (!currPost) return res.status(401).send("You are not Authorized")
        res.status(201).json("Updated Sucessfully")
    } catch (error) {
        res.status(500).json(error.message)
    }
}


export const deletePost = async (req, res) => {
    try {
        const currPost = await postModel.findByIdAndDelete(req.params.id)
        const comments = await commentModel.deleteMany({postId:req.params.id})
        if (!currPost) return res.status(401).send("You are not Authorized")
        res.status(200).json("Deleted Sucessfully")
    } catch (error) {
        res.status(500).json(error.message)
    }
}


export const getAllPosts = async (req, res) => {
    let qCategory = req.query.category
    let userId = req.query.userId
    try {
        let post
        if (qCategory) {
            post = await postModel.find({ category: qCategory })
        } else if (userId) {
            post = await postModel.find({ userId: userId })
        } else {
            post = await postModel.find()
        }

        res.status(201).json(post)
    } catch (error) {
        res.status(500).json(error.message)
    }
}


export const getSinglePost = async (req, res) => {
    try {
        const post = await postModel.findById(req.params.id)
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export const getUserPost = async (req, res) => {
    try {
        const post = await postModel.find({ postId: req.params.id })
        res.status(201).json(post)
    } catch (error) {
        res.status(500).json(error.message)
    }
}