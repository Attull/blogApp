import Express from "express"
import { getUserController } from "../controller/userController.js"

const userRoute =  Express.Router()

userRoute.get("/user",getUserController)


export default userRoute