import jwt from "jsonwebtoken"


export const verifyToken = async (req, res, next) => {
    const authHeaders = req.headers.token
    try {
        if (!authHeaders) return res.status(401).send("You are not Authorized")
        const token = authHeaders.split(" ")[1];
        jwt.verify(token, "venky", (error, user) => {
            if (error) return res.status(401).send(error.message)
            req.user = user;
        })
        next()
    } catch (error) {
        return res.status(401).send(error.message)
    }
}