import userModel from "../models/userModel.js"


export const updateUser = async (req, res) => {
    try {

        const currUser = await userModel.findOneAndUpdate({ email: req.user.email }, req.body)
        if (!currUser) return res.status(401).send("You are not Authorized")
        res.status(201).json("Updated Sucessfully")
    } catch (error) {
        res.status(500).json(error.message)
    }
}


export const deleteUser = async (req, res) => {
    try {
        const currUser = await userModel.findByIdAndDelete({ id: req.params.id })
        if (!currUser) return res.status(401).send("You are not Authorized")
        res.status(201).json(currUser)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find()
        res.status(201).json(users)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export const getSingleUsers = async (req, res) => {

    try {
        const currUser = await userModel.findById(req.params.id)
        if (!currUser) return res.status(401).send("You are not Authorized")
        const {password, ...other} = currUser?._doc;
        res.status(201).json(other)
    } catch (error) {
        res.status(500).json(error.message)
    }
}