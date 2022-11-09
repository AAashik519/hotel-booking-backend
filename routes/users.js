import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/user.js";
import { veriftAdmin, verifyToken, verifyUser } from "../utils/verifiyToken.js";
const router = express.Router();



// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("hello user, you are logged in");
// });

// router.get("/checkUser/:id", verifyUser, (req, res) => {
//   res.send("hello user, you are logged in and you can delete your account");
// });

// router.get("/checkAdmin/:id", veriftAdmin, (req, res) => {
//   res.send("hello user, you are logged in and you can delete  all  account");
// });



//UPDATE
router.put("/:id", verifyUser, updateUser);

//DELETE
router.delete("/:id",verifyUser,deleteUser);

//GET User
router.get("/:id",veriftAdmin , getUser);

//GET ALL UserS

router.get("/", getUsers);

export default router;
