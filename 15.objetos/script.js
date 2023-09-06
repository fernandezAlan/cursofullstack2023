//ARREGLOS
var arr = ["alan",25] //<== esto es un arreglo vacio
arr[0]
//OBJETOS
{} // un objeto vacio
var obj = {
    nombre:"alan",
    apellido:"fernandez",
    edad:28,
    ciudad: "buenos aires",
    saludar: function(){
       console.log("hola yo soy "+ this.nombre + " "+ this.apellido)
    }
}

//dot notation
obj.nombre //"alan"
obj.edad // 28
obj.ciudad//"buenos aires"

console.log() // log es un metodo del objeto console
obj.saludar() //<=== es un metodo, una funcion que existe dentro de un objeto


//bracket notation

obj["nombre"]// "alan"
obj["edad"] //28
obj["ciudad"] // "buenos aires"
obj["saludar"]() //<== ejecutamos el metodo

var prop = "nombre"
obj[prop] // "alan"

//iterar un arreglo
var arr = [1,2,3,4,5]
for(var i=0;i<arr.length;i++){
    console.log(arr[i])
}
//for in - sirve para iterar objetos
for( prop in obj){
    console.log(prop)
    
}

//van a crear una funcion llamada hacerUnObjeto va a recibir pro parametro dos datos, una propieda y un valor , la funcion debe devolver un objeto usando esa propiedad y ese valor
// return 
var hacerUnObjeto = (prop,valor)=>{
    var obj = {}
    obj[prop] = valor // {prop:valor}
    return obj 
} 

hacerUnObjeto("nombre","alan") //===> {nombre:"alan"}
hacerUnObjeto("edad",28) //===> {edad:28}

 
// van a crear una funcion llamada reverso, la funcion recibe un objeto por parametro y devuelve un nuevo objeto con los datos del primer objeto al reves
var obj = {
    nombre:"pepe",
    edad:20
}

const reverso = (obj)=>{
    var newObj = {}

    for( key in obj){
        var valor = obj[key]
        newObj[valor] = key
    }
    
    return newObj
}
reverso(obj) // ===> {pepe:"nombre"}

//for(in)

var obj2 = {
    pepe:"nombre",
    20:"edad"
}