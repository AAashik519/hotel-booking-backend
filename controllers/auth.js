import User from "../models/User.js"
import bcrypt from 'bcryptjs'
import { creteError } from "../utils/error.js";
import jwt from "jsonwebtoken";
//register
export const register = async(req,res,next)=>{
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:hash,
        })
        await newUser.save()
        res.send(newUser)
        res.status(200).send("User Has Been created")
      
    } catch (err) {
        next(err)
    }
}

//login
export const  login = async(req,res,next)=>{
    try {
       const user = await User.findOne({username:req.body.username})
       if(!user) return next(creteError(404,"Wrong password and username"))
        
       const isPasswordCorrect= await bcrypt.compare(req.body.password ,user.password)
       if(!isPasswordCorrect) return next(creteError(404,"Wrong password and username"))

        const token =jwt.sign({id:user._id , isAdmin:user.isAdmin},process.env.JWT)


       const{password,isAdmin, ...otherDetails}=user._doc;
       res
       .cookie('access_token',token,{
          httpOnly:true,
       })
       .status(200)
       .send({...otherDetails})
       
      
    } catch (err) {
        next(err)
    }
}