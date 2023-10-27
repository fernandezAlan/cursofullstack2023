const express = require('express')
const route = express.Router()
const userControllers= require('../controllers/user.controllers')

//CRUD create - read - update - delete

route.post('/getUser',userControllers.get)
route.post('/create',userControllers.create)
//route.put('/:id',userControllers.update)
//route.delete('/:id',userControllers.remove)





module.exports = route