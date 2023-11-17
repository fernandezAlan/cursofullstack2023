const Task = require('../models/task')
const tokensHandler = require('../utils/token')
const login = (req,res)=>{
    res.render('pages/login')
}

const profile = async (req,res)=>{
    const token = req.cookies.token
    if(token){
        const user = tokensHandler.validateToken(token)
        if(user){
            const tasks = await Task.find({userId:user._id})
            res.render('pages/profile',{tasks:tasks})
        }
        else{
            res.redirect('/view/login')
        }
     
    }else{
        res.redirect('/view/login')
    }
}

module.exports = {
    login:login,
    profile: profile
}