import user from "../modal/user"
import user from "../modal/user"
import bcrypt from "bcryptjs"

export const getUserController = async (req,res)=>{
    let users
    try{
    users =  await user.find()
   }catch(err){
        console.log(err)
   }

   if(!users){
        res.status(400).json({
            message:"No user found"
        })
   }

   res.status(200).json({
    users
   })
}

export const loginController = (req, res) =>{

    const {email, password} =  req.body
    res.send({
        message:"Login"
    })
}

export const signupController = async (req, res) =>{

    const {name, password, email} = req.body
    let existingUser

    try{
        existingUser =  await user.findOne({email:email})
    }catch(err){
        console.log(err)
    }

    if(existingUser){
        res.status(400).json({
            message:"User is already there"
        })
    }

    const hashPassword = bcrypt.hashSync(password)

    const user = new user({
        name:name,
        email:email,
        password: hashPassword
    }) 

    user.save()

}