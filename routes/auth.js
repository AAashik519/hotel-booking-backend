import express from 'express'
const router = express.Router()

router.get("/",(req,res)=>{
    res.send('hello end point')
})

router.get('/register',(req,res)=>{
    res.send('Hello, This is auth register')
})


export default router