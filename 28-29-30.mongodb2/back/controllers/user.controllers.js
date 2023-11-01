const User = require('../models/user')

const get = async (req,res)=>{
  const email = req.body.email
const password = req.body.password

  const foundUser = await User.findOne({email:email})
  if(foundUser && foundUser.password === password){
    res.status(200).json(foundUser)
  }else{
    res.status(404).end()
  }
}

const create = async (req,res)=>{
    const user = await User.create({
        name:req.body.name,
        email: req.body.email,
        password:req.body.password
    })
    res.status(201).json(user)
}

module.exports = {
    get:get,
    create:create
}