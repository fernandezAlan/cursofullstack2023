const Database = require("./db")

class User extends Database {
   //this.data
    add(data){
        if(data.name !== undefined && data.email!== undefined){
            var newData = {
                name: data.name,
                email: data.email
            }
            super.add(newData)
        }
    }

}

module.exports = User