import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import AuthRoute from "./routes/authRoute.js"
import UserRoute from "./routes/usersRoute.js"
import PostRoute from "./routes/postRoute.js"
import CommentRoute from "./routes/commentRoute.js"
import cors from "cors"


const app = express();
dotenv.config()
app.use(express.json())
app.use(cors())
const PORT = 8800;




const connect = () => {
    try {
        mongoose.connect(process.env.MONGO_URL).then(console.log("connected sucessfully"))
    } catch (error) {
        console.log(error.message)
    }
}

app.listen(PORT, () => {
    connect(),
        console.log(`app is listening at Port ${PORT}`)
})

// routes

app.use("/api/auth", AuthRoute)
app.use("/api/user", UserRoute)
app.use("/api/post", PostRoute)
app.use("/api/comment", CommentRoute)

