const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const userRoutes = require('./routes/userRoutes')

//middlewares
app.use(bodyParser.json())
app.use(cors())

app.use('/user',userRoutes)

app.listen(port, async () => {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/token')
        console.log(`Example app listening on port ${port}`)
    }catch(error){
        console.log('erro al conectar la base de datos:',error)
    }
   
})
