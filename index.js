 import express from 'express'
 import dotenv from 'dotenv'
import mongoose from 'mongoose';
 import authRoute from './routes/auth.js'
 import  hotelRoute from './routes/hotels.js'
 import userRoute from "./routes/users.js"
 import roomsRoute from './routes/rooms.js'
import cookieParser from 'cookie-parser';
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
app.use(cookieParser())
app.use(express.json())
app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)
app.use("/api/hotels",hotelRoute)
app.use("/api/rooms",roomsRoute)

 
app.use((err,req, res, next) => {
   const errorStatus= err.status  ||500
   const errorMessage= err.message  || "Something is wrong"
   return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack :err.stack,
      
   })
 });

 
app.listen(8800,()=>{
   connect()
   console.log("Connected to the Backend ")
})