const User = require('../models/userModel')
const userUtils= require('../utils/userUtils')

const register = async (req,res)=>{
    try{
        const saltHash = userUtils.generateHash(req.body.password)
        const user = await User.create({
            name:req.body.name,
            email:req.body.email,
            password:saltHash.hash ,
            salt: saltHash.salt
        })
        res.status(201).json(user)
    }catch(error){
        res.status(500).send(error)
    }
   
}

const login = async (req,res)=>{
    const password = req.body.password
    const user = await User.findOne({email:req.body.email})
    const isValid = userUtils.comparePassword(password,user.password,user.salt)
    const token = userUtils.createToken(user.email)
    if(isValid) res.status(200).send(token)
    else res.status(401).end()
}

const private = async (req,res)=>{
    const authHeader = req.headers['authorization'] // "Bearer 123213jdskfjgkdsjg"
    const token = authHeader && authHeader.split(' ')[1]// ["Bearer","asdasdsafsdfsdf"]
    const email =  userUtils.validateToken(token)
    if(email.error){
        res.status(401).end()
    }
    else{
        const user = await User.findOne({email:email})
        res.status(200).json(user)
    }
}

/*
{
    name:
    email:
    password: hash,
    salt:randon string
}
*/

module.exports = {
    register:register,
    login: login,
    private:private
}