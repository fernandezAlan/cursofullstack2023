const crypto = require('node:crypto')
const tokens = {}

const generateNewToken = (data)=>{
   var token =  crypto.randomBytes(48).toString('hex');
   tokens[token] = data
   return token
}

const validateToken = (token)=>{
    console.log('validatetOKEN',tokens)
    var data = tokens[token]
    if(data) return data
    else return false
}

const removeToken = (token)=>{
    console.log('token',tokens)
    delete tokens[token]
    console.log(tokens)
    return true
}


module.exports = {
    tokens:tokens,
    generateNewToken:generateNewToken,
    validateToken:validateToken,
    removeToken:removeToken
}