import express from 'express'
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from '../controllers/hotel.js'
import Hotel from '../models/Hotel.js'
import { creteError } from '../utils/error.js'
const router = express.Router()

//Create 
    router.post("/",createHotel)
//UPDATE
router.put("/:id",updateHotel)

//DELETE
router.delete("/:id",deleteHotel)

//GET HOTEL
router.get("/:id",getHotel)

//GET ALL HOTELS

router.get("/",getHotels)

export default router