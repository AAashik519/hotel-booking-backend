import express from 'express'
import { deleteUser, getUser, getUsers, updateUser } from '../controllers/user'
import { verifyToken } from '../utils/verifiyToken'
const router = express.Router()

router.get("/checkAuthentication", verifyToken ,(req,res,next)=>{
    res.send("hello user ,you are  loggin")
})

//UPDATE
router.put("/:id",updateUser)

//DELETE
router.delete("/:id",deleteUser)

//GET User
router.get("/:id", getUser)

//GET ALL UserS

router.get("/",getUsers)


export default router