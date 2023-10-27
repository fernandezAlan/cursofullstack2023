const Task = require('../models/task')
const User = require('../models/user')
const get = async(req,res)=>{
    const tasks = await Task.find({userId:req.body.userId})
    console.log(req.body.userId)
    res.status(200).json(tasks)
}

const create = async (req,res)=>{
    try{
        const user = User.findById(req.body.userId)

        console.log('user:',user.getQuery()._id)
        const task = await Task.create({
            text:req.body.text,
            done: false,
            userId:user.getQuery()._id,
        })
        res.status(201).json(task)
    }catch(error){
        console.log('error',error)
    }
 
}


module.exports = {
    get: get,
    create: create
}