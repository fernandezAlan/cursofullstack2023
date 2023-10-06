const Database = require("./database")

class Products extends Database {
    add(data){
        if(data.name!== undefined && data.price > 0){
            super.add(data)
        }

    }
}

module.exports = Products