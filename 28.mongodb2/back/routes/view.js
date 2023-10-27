const express = require('express')
const route = express.Router()
const viewControllers= require('../controllers/view.controllers')

//CRUD create - read - update - delete

route.get('/login',viewControllers.login)
route.get('/profile',viewControllers.profile)





module.exports = route