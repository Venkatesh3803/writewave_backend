import userModel from "../models/userModel.js"
import bycrpt from "bcrypt"
import jwt from "jsonwebtoken"

export const register = async (req, res) => {
    const salt = await bycrpt.genSalt(10);
    const hashPass = await bycrpt.hash(req.body.password, salt)
    req.body.password = hashPass;
    const newUser = await userModel(req.body)
    try {
        const existUser = await userModel.findOne({ email: newUser.email })
        if (existUser) return res.status(401).send("User alreay exist with this Email")
        const user = await newUser.save()
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json(error.message)
    }

}


export const login = async (req, res) => {
    try {
        const currUser = await userModel.findOne({ email: req.body.email })
        if (!currUser) return res.status(401).send("User does not exist")

        const verifyPass = await bycrpt.compare(req.body.password, currUser.password)
        if (!verifyPass) return res.status(404).send("Invalid Credentials")

        const token = jwt.sign({
            id: currUser._id, email: currUser.email
        }, "venky", { expiresIn: "24h" })
        const { password, ...info } = currUser._doc;
        res.status(200).json({ ...info, token })

    } catch (error) {
        res.status(500).json(error.message)
    }
}