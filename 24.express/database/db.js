class Database {
    constructor(){
        this.data= []
        this.id = 1
    }
    add(data){
        data.id = this.id
        this.data.push(data)
        this.id = this.id + 1
    }
    findById(id){
        const found = this.data.filter((dt)=>dt.id=== id) // []
        if(found.length >= 1){
            return found[0]
        }
    }
    delete(id){
        this.data = this.data.filter((dt)=>dt.id !== id)
    }
    modify(data){
        let res = false
        this.data.forEach((dt)=>{
            if(dt.id === data.id){
                dt = data
                res = true
            }
        })
        return res
    }
}

module.exports = Database