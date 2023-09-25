import Express from "express"
import { getUserController, loginController } from "../controller/userController.js"

const userRoute =  Express.Router()

userRoute.get("/user",getUserController)

userRoute.get("/login",loginController)

export default userRoute