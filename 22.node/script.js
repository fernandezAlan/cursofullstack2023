var http = require("node:http")

var hostname = "localhost"
var port  = 3000
var onRequest = (req,res)=>{
    console.log("METHOD:",req.method)
    res.setHeader('Content-Type', 'application/json');
    switch (req.method) {
        case "GET":
            if(req.url==="/"){
                res.end(JSON.stringify({name:"juan"}))
            }
            else if(req.url==="/pepe"){
                res.end(JSON.stringify({name:"pepe"}))
            }
            else if(req.url === "/miguel"){
                console.log("miguel!")
                res.end(JSON.stringify({name:"miguel"}))
            }
            break;
        case "POST":
            if(req.url==="/"){
                res.end("se creo el usuario Juan")
            }
            else if(req.url==="/pepe"){
                res.end("se creo el usuario Pepe")
            }
            else if(req.url === "/miguel"){
                res.end("se creo el usuario Miguel")
            }
            break;
        case "DELETE":
            res.end("se ELIMINO usuario")
            break;
    
        default:
            break;
    }
    /*
    
        switch (req.url) {
            case "/user":
                res.end(JSON.stringify({name:"pepe"}))
                break;
            case "/product":
                res.end("zapatilla")
                break;
            default:
                res.writeHead(301, {
                    Location: `http://google.com.ar`
                  }).end();
                break;
        }
    */
 

}
//method 
//GET : cuando el cliente quiere acceder a algun recurso
//POST : cuando el cliente quiere crear algun recurso
//DELETE : el usuario quiere borrar algun recurso
//PUT : quiere modificar algun recurso

//404 not found
//400 error del cliente 
//200 ok
//201 created
//401 not auth
//500 internal server error
var server = http.createServer(onRequest)


server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
})