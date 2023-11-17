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

const remove = async (req,res) =>{
    try{
        const id = req.params.id
       await Task.findByIdAndDelete(id)
       res.status(200).end()
    }catch(error){
        console.log("error",error)
        res.status(500).end()
    }
  
}
module.exports = {
    get: get,
    create: create,
    remove: remove
}