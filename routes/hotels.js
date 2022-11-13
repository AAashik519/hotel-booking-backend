import express from 'express'
import { countByCity, countByType, createHotel, deleteHotel, getHotel, getHotels, updateHotel } from '../controllers/hotel.js'
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
router.get("/find/:id", getHotel)

//GET ALL HOTELS

router.get("/",getHotels)

router.get("/countByCity",countByCity)

router.get("/countByType",countByType)

export default router