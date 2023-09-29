//POO
class Persona{
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad
    }

    saludar(){
        console.log("hola yo soy "+ this.nombre)
    }
}

var pepe = new Persona("pepe",20)
var juan = new Persona("juan",20)

//funciones contructoras

function Persona(nombre,edad){
    var pais ="argentina"
    this.nombre = nombre;
    this.edad = edad;
    this.saludar = function(){
        console.log("hola yo soy "+ this.nombre)
    }
    this.obtenerPais = function(){
        return pais
    }
    this.cambiarPais= function(newPais){
        if(typeof newPais === "string"){
            var arr = newPais.split("")
            arr[0] = arr[0].toUpperCase()
            pais = arr.join("")
        }
    }
}


//set get

var pepe = {
    _nombre :"pepe",
    get nombre(){
        return this._nombre
    },
    set nombre(name){
        if(typeof name === "string"){
            this._nombre = name
        }
    }
}

class Persona{
    constructor(nombre){
        this._nombre = nombre 
    }
    get nombre(){
        return this._nombre
    }
    set nombre(name){
        if(typeof name === "string"){
            this._nombre = name
        }
    }
}

/*
2-Crea una clase de "Empleado" que tenga propiedades como nombre, salario y fecha de contratación. Luego, crea una subclase de "Empleado" llamada "Gerente" que tenga propiedades adicionales como el departamento que maneja y el número de empleados a cargo. Crea varias instancias de ambas clases y muestra sus propiedades en la consola.
*/