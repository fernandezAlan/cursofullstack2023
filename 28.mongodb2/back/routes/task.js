const express = require('express')
const route = express.Router()
const taskControllers= require('../controllers/task.controllers')

//CRUD create - read - update - delete

route.post('/getTask',taskControllers.get)
route.post('/create',taskControllers.create)
//route.put('/:id',taskControllers.update)
//route.delete('/:id',taskControllers.remove)





module.exports = route