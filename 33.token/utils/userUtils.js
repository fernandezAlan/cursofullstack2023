const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const generateHash = (password)=>{
    const salt = crypto.randomBytes(16).toString('hex'); // string random 
    const hash = crypto.pbkdf2Sync(password, salt,
        1000, 64, `sha512`).toString(`hex`);

        return {
            salt: salt,
            hash:hash
        }
}
/*

"12345"  ===> "abc" ===> "zxc"
"12345"  ===> "abc" ===> "zxc"
 "zx" === "zxcy" ======> false

*/
const comparePassword = (password,hash,salt)=>{
    const newHash  = crypto.pbkdf2Sync(password,
        salt, 1000, 64, `sha512`).toString(`hex`);

    return newHash === hash
}

const createToken = (email)=>{
    return jwt.sign(email, 'token-secreto');
}

const validateToken =(token) =>{
    return jwt.verify(token,'token-secreto',(error,email)=>{
        if(error) return {error:'token invalido'}
        else return email
    })
}

module.exports = {
    generateHash:generateHash,
    comparePassword:comparePassword,
    createToken:createToken,
    validateToken:validateToken
}