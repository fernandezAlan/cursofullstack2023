const express = require('express')
const app = express()
const port = 3000
const bodyParser = require("body-parser")
const userRoutes = require("./routes/users.routes")
const productRouts = require("./routes/products.routes")



app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/user',userRoutes)
app.use('/product',productRouts)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})