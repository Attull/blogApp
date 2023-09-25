import Express from "express"
import { getUserController, signupController } from "../controller/userController.js"

const userRoute =  Express.Router()

userRoute.get("/user",getUserController)

userRoute.post("/login",loginController)

userRoute.post("/signup",signupController)

export default userRoute


