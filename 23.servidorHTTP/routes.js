
class Routes {
    constructor(req,res){
        this.req = req;
        this.res = res
    }
    get(url,controlador){
        if(this.req.method=== "GET" && this.req.url === url){
            controlador(this.req,this.res)
        }
    }
    post(url,controlador){
        if(this.req.method=== "POST" && this.req.url === url){
            controlador(this.req,this.res)
        }
    }
    put(url,controlador){
        if(this.req.method=== "PUT" && this.req.url === url){
            controlador(this.req,this.res)
        }

    }
    delete(url,controlador){
        if(this.req.method=== "DELETE" && this.req.url === url){
            controlador(this.req,this.res)
        }
    }
  
}


module.exports = Routes