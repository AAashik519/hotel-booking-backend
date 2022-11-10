import express from 'express'
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from '../controllers/room.js'
const router = express.Router()
import { veriftAdmin } from '../utils/verifiyToken.js'
 //Create 
 router.post("/:hotelid", veriftAdmin,  createRoom)
 //UPDATE
 router.put("/:id",veriftAdmin,  updateRoom)
 
 //DELETE
 router.delete("/:id/:hotelid",veriftAdmin,  deleteRoom)
 
 //GET HOTEL
 router.get("/:id",  getRoom)
 
 //GET ALL HOTELS
 
 router.get("/", getRooms)
 
 export default router

 