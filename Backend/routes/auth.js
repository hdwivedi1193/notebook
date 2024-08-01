require('dotenv').config({ path: 'Backend/.env' })
const express = require('express')
const UserSchema=require("../models/Users.js")
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const router = express.Router()
const jwt = require('jsonwebtoken');
const fetchAuthUser = require('../middlewares/fetchUser.js');

const salt =  bcrypt.genSaltSync(10);
const private_auth_key= process.env.JWT_SECRET_KEY

// create user route
router.post('/create/user',[
     body('name').notEmpty(),
     body('email').isEmail(),
     body('password').isLength({ min: 6 }),
     body('cpassword').isLength({ min: 6 }).custom((value, { req }) => {
          if (value !== req.body.password) {
               throw new Error('Password confirmation does not match password');
          }else{
               return true;
          }
            })

   ],async (req,res)=>{

     // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

try{

     // User Creation goes here with encrypted password
     const user= await UserSchema.create({
          name: req.body.name,
          email: req.body.email,
          password: bcrypt.hashSync(req.body.password, salt)
        });
     
        res.status(200).json({status:200})
}catch(err){
     res.status(400).json(err.message)

}
   
     
})

// Login route goes here

router.post('/login',[
     body('email').isEmail(),
     body('password').exists()
],async(req,res)=>{
     const errors = validationResult(req);
     if (!errors.isEmpty()) {
       return res.status(400).json({ errors: errors.array() });
     }

     const findUser= await UserSchema.findOne({email:req.body.email}).select('password')

     if(!findUser){
          return res.status(400).json({errors:"User Not found"})
     }
     const checkPassword=bcrypt.compareSync(req.body.password, findUser.password); // compare plain with hash

     if(!checkPassword){
          return res.json({errors:"Please enter correct password"})
     }

     const token=jwt.sign({ id: findUser._id }, private_auth_key);
     if(token){
          return res.json({status:200,token:token})

     }else{
          return res.json({status:400,token:null})

     }


})

// fetch user data route

router.get('/user', fetchAuthUser, async (req,res)=>{
     const findUserById=await UserSchema.findById({_id:req.user_id})
     if(!findUserById){
          res.status(400).json({error:"User not found"})
     }

     res.send(findUserById)
})

module.exports = router;

