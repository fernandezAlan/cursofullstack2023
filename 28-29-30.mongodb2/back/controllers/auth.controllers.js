const User = require('../models/user')
const login = async (req,res)=>{
    const email = req.body.email
    const password = req.body.password
    const user = await User.findOne({email:email})
    if(user && user.password === password){
        res.status(200).json(user)
    }
    else{
        res.status(400).end()
    }
}

const register = async (req,res)=>{
    try{
        const email = req.body.email
        const password = req.body.password
        const name = req.body.name
        const user = await User.create({
            email:email,
            password:password,
            name: name
        })
        res.status(201).json(user)
    }catch(error){
        res.status(500).end()
    }
 
}


module.exports = {
    login:login,
    register:register
}