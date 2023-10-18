const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const port = 3000

var db = []
var user;

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.use(express.static('public'))

app.set('view engine','ejs')

app.get('/login',(req,res)=>{
    res.render('pages/login')
})

app.get('/register',(req,res)=>{
    res.render('pages/register')
})

app.post('/api/register',(req,res)=>{
    db.push(req.body)
    res.end()
})

app.post('/api/login',(req,res)=>{
    const email = req.body.email
    const password = req.body.password
    const datos = db.find((dato)=>dato.email === email) //{email,password}
    console.log("datos",datos)
    if(datos){
        if(datos.password === password){
            console.log("datos ok")
            console.log("password",password)
            user = datos
            res.status(200).end()
        }
        else{
            res.status(404).end()
        }
    }else{
        res.status(404).end()
    }
})

app.get('/',(req,res)=>{
    res.render('pages/index',{datos:user})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})