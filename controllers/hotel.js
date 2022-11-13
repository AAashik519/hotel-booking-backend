import Hotel from "../models/Hotel.js"

export const createHotel= async (req,res,next)=>{
    const newHotel = new Hotel(req.body)
    try {
        const savedHotel= await newHotel.save()
        res.status(200).json(savedHotel)
    } catch (err) {
         next(err)
    }
}

export const updateHotel= async (req,res,next)=>{
    try {
        const UpdateHotel =  await Hotel.findByIdAndUpdate(req.params.id ,
         {$set :req.body},
         {new:true}
         
         )
        res.status(200).json( UpdateHotel)
    } catch (err) {
        next(err)
    }
}

export const deleteHotel= async (req,res,next)=>{
    try {
        await Hotel.findByIdAndDelete(req.params.id)
      res.status(200).json("hotel Has been deleted")
  } catch (err) {
      next()
  }
}
export const getHotel= async (req,res,next)=>{
    try {
        const  hotel= await Hotel.findById(req.params.id)
        res.status(200).json(hotel)
    } catch (err) {
        next()
    }
}

export const getHotels= async (req,res,next)=>{
    const {}
    try {
        const  hotels= await Hotel.find(req.query).limit(req.query.limit)
        res.status(200).json(hotels)
    } catch (err) {
        next()
    }
}
export const  countByCity= async (req,res,next)=>{
    const cities= req.query.cities.split(",")
    try {
        const list = await Promise.all(cities.map(city =>{
            return Hotel.countDocuments({city:city})
        }))
        res.status(200).json(list)
    } catch (err) {
        next()
    }
}

 
export const   countByType= async (req,res,next)=>{
    try {
        const hotelCount = await Hotel.countDocuments({type:"Hotel"})
        const  apartmentCount = await Hotel.countDocuments({type:"apartment"})
        const  resortCount = await Hotel.countDocuments({type:"resort"})
        const  villaCount = await Hotel.countDocuments({type:"villa"})
        const  cabin = await Hotel.countDocuments({type:"cabin"})
       
        res.status(200).json([
            {type: "Hotel" ,count:hotelCount},
            {type: "apartment" ,count:apartmentCount},
            {type: "resort" ,count:resortCount},
            {type: "villa" ,count:villaCount},
            {type: "cabin" ,count:cabin},
        ])
    } catch (err) {
        next(err)
    }
}

 