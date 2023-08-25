// variables globales
var nombre = "alan"


//declarando una funcion
function saludar(nombre){//undefined
    console.log("hola " + nombre)
    // variables locales
    var algo = "algo"
}

function sumar(num1=10,num2=20){
    if(typeof(num1) === "number" && typeof(num2)=== "number"){
    
         resultado = num1 + num2 // variable local
        return resultado
    }
    else{
        console.error("los parametros debe ser un numero")
    }
}

//sumar(10)
//sumar(20)
//sumar(30)
saludar("alan")
saludar("pepe")
saludar("juan")
console.log("nombre es ", nombre)
//saludar()
//sumar("hola")
var res = sumar(10, 50) // undefined
console.log("resultado",res)


//van a crear una funcion que se llame esPar que va a tomar por parametro un numero y la funcion debe devolver true si el numero es par.
//si el numero es impar la funcion debe devolver false

esPar(10)// true
esPar(15)// false
esPar(1)// false
var res = esPar(18)
console.log(res)
true
false