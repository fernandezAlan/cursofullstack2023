const express = require('express')
const route = express.Router()
const authControllers= require('../controllers/auth.controllers')

//CRUD create - read - update - delete

route.post('/login',authControllers.login)
route.post('/register',authControllers.register)





module.exports = route