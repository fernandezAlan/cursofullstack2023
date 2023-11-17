const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
var cookieParser = require('cookie-parser')

const userRoutes = require('./routes/user')
const taskRoutes = require('./routes/task')
const authRoutes = require('./routes/auth')
const viewRoutes = require('./routes/view')
const cors = require('cors')
const app = express()
const port = 3000

//middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('public'))
app.use(cors())
app.set('view engine', 'ejs');
app.use(cookieParser())

app.use('/user',userRoutes)
app.use('/task',taskRoutes)
app.use('/auth',authRoutes)
app.use('/view',viewRoutes)

app.listen(port, async () => {
    mongoose.connect('mongodb://127.0.0.1:27017/test2')
    console.log('database connected')
  console.log(`Example app listening on port ${port}`)
})