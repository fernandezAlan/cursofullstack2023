const form = document.querySelector('form')
const nombre = document.getElementById('product-name')
const price = document.getElementById('product-price')
const container = document.getElementById("products_container")
let state = 'creating';

let allProducts = []
let selectedProduct;

const getAllProducts = async ()=>{
    const data = await fetch('http://localhost:3000/product')
    const products = await data.json()
    allProducts = products
    printProducts(products)
}
const deleteProduct = async (name)=>{
    console.log("name",name)
     await fetch('http://localhost:3000/product/'+name,{
        method:'DELETE'
    })
    container.innerHTML = ''
    getAllProducts()
}

const createProduct = async (name,price)=>{
    await fetch('http://localhost:3000/product/',{
        method:'POST',
        body: JSON.stringify({
            name:name,
            price:price,
            allow:true
        }),
        headers :{
            "Content-Type": "application/json",
        }
    })

    container.innerHTML = ''
    getAllProducts()

}
const editProduct = (name)=>{
    selectedProduct = allProducts.find((product)=>product.name === name)
    nombre.value = selectedProduct.name
    price.value = selectedProduct.price
    state = 'editing'
}

const updateProducts = async(data)=>{
    await fetch('http://localhost:3000/product/'+data._id,{
        method:'PUT',
        body: JSON.stringify({
            name:nombre.value,
            price:price.value,
            allow:true
        }),
        headers :{
            "Content-Type": "application/json",
        }
    })

    container.innerHTML = ''
    getAllProducts()
}

const printProducts = (products)=>{
    products.forEach((product)=>{
        console.log('product.id',product._id)
        container.innerHTML += `
        <div>
            <span>${product.name}<span>
            <span>$${product.price}<span>
            <button onClick="deleteProduct('${product.name}')">borrar<button>
            <button onClick="editProduct('${product.name}')">editar<button>
        </div>`
    })

}
form.addEventListener('submit',(event)=>{
    event.preventDefault()
    if(state === 'creating'){
        createProduct(nombre.value,price.value)
    }
    else if(state === 'editing'){
        updateProducts(selectedProduct)
        state = "creating"
    }
})

getAllProducts()