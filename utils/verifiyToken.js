 
import jwt from 'jsonwebtoken'
import {creteError} from './error.js'
 

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
      return next(creteError(401, "You are not authenticated!"));
    }
  
    jwt.verify(token, process.env.JWT, (err, user) => {
      if (err) return next(creteError(403, "Token is not valid!"));
      req.user = user;
      next(err);
    });
  };


  export const verifyUser= (req,res,next)=>{
    verifyToken(req,res,next ,()=>{
      if(req.user.id === req.params.id || req.user.isAdmin){
        next()
      }else{
       if(err) return next(creteError(403, "You are not authorized!"));
      }
    })
  } 

  export const veriftAdmin= (req,res,next)=>{
    verifyToken(req,res,next ,()=>{
      if( req.user.isAdmin){
        next()
      }else{
       if(err) return next(creteError(403, "You are not authorized!"));
      }
    })
  } 