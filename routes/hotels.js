import express from 'express'
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from '../controllers/hotel.js'
import Hotel from '../models/Hotel.js'
import { creteError } from '../utils/error.js'
import { veriftAdmin } from '../utils/verifiyToken.js'
const router = express.Router()

//Create 
    router.post("/",veriftAdmin , createHotel)
//UPDATE
router.put("/:id",veriftAdmin, updateHotel)

//DELETE
router.delete("/:id",veriftAdmin, deleteHotel)

//GET HOTEL
router.get("/:id", getHotel)

//GET ALL HOTELS

router.get("/",getHotels)

export default router