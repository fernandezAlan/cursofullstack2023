const User = require('../models/user')
const tokenHandler = require('../utils/token')
const login = async (req,res)=>{
    const email = req.body.email
    const password = req.body.password
    const user = await User.findOne({email:email})
    const token = tokenHandler.generateNewToken(user)
    if(user && user.password === password){
        res.status(200).send(token)
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

const logout = (req,res)=>{
    try{
        const token = req.headers.authorization.split(' ')[1]
        tokenHandler.removeToken(token)
       // res.clearCookie("token");
        res.status(200).end()
    }catch(error){
        res.status(500).end()
    }
}


module.exports = {
    login:login,
    register:register,
    logout:logout
}