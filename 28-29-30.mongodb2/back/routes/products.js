const express = require('express')
const route = express.Router()
const productsControllers = require('../controllers/products')

//CRUD create - read - update - delete

route.get('/',productsControllers.get)
route.post('/',productsControllers.create)
route.put('/:id',productsControllers.update)
route.delete('/:name',productsControllers.remove)





module.exports = route