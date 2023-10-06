//var
//const
//let


const http = require('http');
const Routes = require("./routes")
const User = require("./user.database")
const user = new User()
const hostname = 'localhost';
const port = 3000;


const onRequest = (req, res)=>{
    const routes = new Routes(req,res)

    routes.get("/",(req,res)=>{
        res.end("hola mundo")
    })
    routes.get("/user",(req,res)=>{
        res.end(JSON.stringify(user.data))
    })
    routes.post("/user",(req,res)=>{
        user.add({name:"pepe",email:"pepe@gmail.com"})
        res.end("OK")
    })
    routes.put("/user",(req,res)=>{
        res.end("el usuario fue creado")
    })
    routes.delete("/user",(req,res)=>{
        res.end("el usuario fue eliminado")
    })
    routes.post("/product",(req,res)=>{
        res.end("un producto")
    })
}
const server = http.createServer(onRequest);
 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});