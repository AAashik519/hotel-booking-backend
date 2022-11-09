import express from 'express'
import { deleteUser, getUser, getUsers, updateUser } from '../controllers/user.js'
import { verifyToken } from '../utils/verifiyToken.js'
const router = express.Router()

 
  router.get("/checkauthentication", verifyToken, (req,res,next)=>{
   res.send("hello user, you are logged in")
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