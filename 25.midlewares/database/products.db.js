const Database = require("./db")

class Product extends Database {
   //this.data
    add(data){
        if(data.name !== undefined && data.price > 0){
            var newData = {
                name: data.name,
                price: data.price
            }
            super.add(newData)
        }
    }

}

module.exports = Product