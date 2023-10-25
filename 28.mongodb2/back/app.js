const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const productRoutes = require('./routes/products')
const cors = require('cors')
const app = express()
const port = 3000

//middleware
app.use(bodyParser.json())
app.use(cors())

app.use('/product',productRoutes)

app.listen(port, () => {
    mongoose.connect('mongodb://127.0.0.1:27017/test2').then(()=>{
        console.log('database connected')
    })

  console.log(`Example app listening on port ${port}`)
})