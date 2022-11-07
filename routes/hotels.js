import express from 'express'
import Hotel from '../models/Hotel.js'
const router = express.Router()

//Create 
router.post("/",async (req,res)=>{
    const newHotel = new Hotel(req.body)
    try {
        const savedHotel= await newHotel.save()
        res.status(200).json(savedHotel)
    } catch (err) {
        res.status(500).json(err)
        console.log(err.message)
    }
})
 

//UPDATE
router.put("/:id",async (req,res)=>{
    try {
        const UpdateHotel =  await Hotel.findByIdAndUpdate(req.params.id ,
         {$set :req.body},
         {new:true}
         
         )
        res.status(200).json( UpdateHotel)
    } catch (err) {
        res.status(500).json(err)
        console.log(err.message)
    }
})


//DELETE
router.delete("/:id",async (req,res)=>{
    try {
          await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("hotel Has been deleted")
    } catch (err) {
        res.status(500).json(err)
        console.log(err.message)
    }
})

//GET HOTEL
router.get("/:id",async (req,res)=>{
   
    try {
        const  hotel= await Hotel.findById(req.params.id)
        res.status(200).json(hotel)
    } catch (err) {
        res.status(500).json(err)
        console.log(err.message)
    }
})

//GET ALL HOTELS

router.get("/",async (req,res)=>{
   
    try {
        const  hotels= await Hotel.find()
        res.status(200).json(hotels)
    } catch (err) {
        res.status(500).json(err)
        console.log(err.message)
    }
})

export default router