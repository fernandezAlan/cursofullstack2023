// eventos

function saludar(){
    alert("hola")
}

//setTimeout(saludar,3000)

var boton = document.getElementById("boton")
var formulario = document.getElementById("formulario")
function submit(event){
    event.preventDefault() // metodo que evita el comportamiento por defecto que tiene el formulario
    console.log("submit!")
}
//boton.addEventListener("click",saludar)// 1- tipo de evento 2- la funcion que se va a ejecutar en ese evento


boton.addEventListener("click",()=>console.log("click"))

//formulario.addEventListener("submit",submit)


//lo mas comun
/*
formulario.addEventListener("submit",(event)=>{
    event.preventDefault() // metodo que evita el comportamiento por defecto que tiene el formulario
    console.log("submit!")
})
*/



var emailCorrecto = "user@gmail.com"
var contraseñaCorrecta = "12345"

var inputEmail = document.querySelector('input[type="email"]')
var inputPassword = document.querySelector('input[type="password"]')
var btnSubmit = document.getElementById("btn-submit") 

inputEmail.addEventListener("input",(event)=>{
    var valor = event.target.value
    if(valor.length >=8){
        btnSubmit.disabled = false
    }
})



formulario.addEventListener("submit",(event)=>{
    
    event.preventDefault()
    if(inputEmail.value === emailCorrecto && inputPassword.value === contraseñaCorrecta){
        alert("iniciaste sesion")
    }else if(inputEmail.value !== emailCorrecto){
        alert("pusiste mal el email")
    }else if(inputPassword.value !== contraseñaCorrecta){
        alert("pusiste mal la contraseña")
    }
})


// ejercicio 2

var inputNombre = document.getElementById("nombres")
var btnNombres = document.getElementById("btn-nombres")
var container = document.getElementById("container")

btnNombres.addEventListener("click",()=>{
    var nombre = inputNombre.value
    container.innerHTML += `<p>${nombre}</p>`
})
