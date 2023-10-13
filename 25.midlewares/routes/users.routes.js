const express = require("express")
const User = require("../database/user.db")
const user = new User()
const router = express.Router()
const auth = require("../middlewares/auth")


router.get('/',(req,res)=>{
    res.json(user.data)
})

router.get('/:id',(req,res)=>{
    const id = Number(req.params.id)
    console.log("params",req.params)
   const foundUser = user.findById(id)
   if(foundUser){
     res.json(foundUser)
   }else{
    res.status(404).end() // not found
   }
  })
  
router.post("/",(req,res)=>{
      const name = req.body.name
      const email = req.body.email
      user.add({name:name,email:email})
      res.status(201).send("OK")

  })

  module.exports = router