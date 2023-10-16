import jwt from "jsonwebtoken"


export const verifyToken = async (req, res, next) => {
    const token = req.headers.token.split(" ")[1];
    try {
        if (!token) return res.status(401).send("You are not Authorized")
        jwt.verify(token, "venky", (error, user) => {
            if (error) return res.status(401).send(error.message)
            req.user = user;
            next()
        })
    } catch (error) {
        return res.status(401).send(error.message)
    }
}