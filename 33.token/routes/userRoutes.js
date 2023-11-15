const express = require('express')
const route = express.Router()
const userControllers = require('../controllers/userControllers')

route.post('/register',userControllers.register)

route.post('/login',userControllers.login)

route.get('/private',userControllers.private)


module.exports = route