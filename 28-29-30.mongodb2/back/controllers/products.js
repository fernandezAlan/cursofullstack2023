const Product = require('../models/products')

const get = (req,res)=>{
   Product.find({})
   .then((product)=>{
    res.status(200).json(product)
   })
   .catch(()=>{
    res.status(500).end()
})
}

const create =  async (req,res)=>{ 
    try{
        const product = await Product.create({
            name:req.body.name,
            price:req.body.price,
            allow :req.body.allow,
        })
        res.status(200).json(product)
    }catch(error){
        console.log("error:",error)
        res.status(500).end()
    }
}

const update = (req,res)=>{
    console.log('body:',req.body)
    const id = req.params.id
    Product.findByIdAndUpdate(id,{
        name:req.body.name,
        price:req.body.price,
        allow:req.body.allow
    }).then(()=>{
        res.status(200).end()
    })
    .catch(()=>{
        res.status(500).end()
    })
}

const remove =  (req,res)=>{
    const name = req.params.name
    Product.findOneAndRemove({name:name})
    .then(()=>{
        res.status(200).end()
    })
    .catch(()=>{
        res.status(500).end()
    })

}


module.exports = {
    get:get,
    create:create,
    update: update,
    remove:remove
}