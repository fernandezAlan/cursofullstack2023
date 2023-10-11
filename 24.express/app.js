const express = require('express')
const app = express()
const port = 3000
const User = require("./database/user.db")
const bodyParser = require("body-parser")

const user = new User()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post("/user",(req,res)=>{
  req.body // se guarda informacon que envia el usuario {name:"juan",email:"juan@gmail.com"}
  console.log("el body es:",req.body)
  const name = req.body.name
  const email = req.body.email
  user.add({name:name,email:email})
  //status 201 created
  res.status(201).send("OK")
})

app.get("/user/:id",(req,res)=>{
  const id = Number(req.params.id)
  console.log("params",req.params)
 const foundUser = user.findById(id)
 if(foundUser){
   res.json(foundUser)
 }else{
  res.status(404).end() // not found
 }
})

app.get("/user",(req,res)=>{
  res.json(user.data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})