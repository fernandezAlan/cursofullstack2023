const login = (req,res)=>{
    res.render('pages/login')
}

const profile = (req,res)=>{
 res.render('pages/profile')
}

module.exports = {
    login:login,
    profile: profile
}