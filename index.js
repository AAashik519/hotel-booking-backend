 import express from 'express'
 import dotenv from 'dotenv'
import mongoose from 'mongoose';
 import authRoute from './routes/auth.js'
 import  hotelRoute from './routes/hotels.js'
 import roomsRoute from './routes/rooms.js'
const app =express()

dotenv.config()

const connect= async()=>{
   try {
      await mongoose.connect(`mongodb+srv://${process.env.MONGO_USERS}:${process.env.MONGO_PASS}@cluster0.faozt.mongodb.net/hotelbooking?retryWrites=true&w=majority`);
 
    } catch (error) {
      throw error.message;
    }

}

mongoose.connection.on('disconnected', ()=>{
   console.log('mongoDB disconnected')
})

mongoose.connection.on('connected', ()=>{
   console.log('mongoDB connected')
})


 
//middlewares
app.use(express.json())
app.use("/api/auth",authRoute)
app.use("/api/users",authRoute)
app.use("/api/hotels",hotelRoute)
app.use("/api/rooms",roomsRoute)
 



app.get('/',(req,res)=>{
   
})











app.listen(8800,()=>{
   connect()
   console.log("Connected to the Backend ")
})