const express = require("express")
const Product = require("../database/products.db")
const product = new Product()
const router = express.Router()
const auth = require("../middlewares/auth")

router.get('/',(req,res)=>{
    res.json(product.data)
})

router.get('/:id',(req,res)=>{
    const id = Number(req.params.id)
   const foundProduct = product.findById(id)
   if(foundProduct){
     res.json(foundProduct)
   }else{
    res.status(404).end() // not found
   }
  })
  
router.post("/",auth,(req,res)=>{
    const name = req.body.name
    const price = req.body.price
    product.add({name:name,price:price})
    res.status(201).send("OK")
  })

  module.exports = router