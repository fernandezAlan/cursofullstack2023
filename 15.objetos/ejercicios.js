

arr[1].nombre // "juan"



var arr2 = [
    {paises:[{nombre:"argentina"},{nombre:"uruaguay"},{nombre:"paraguay"}]},
    {paises:[{nombre:"panama"},{nombre:"chile"},{nombre:"venezuela"}]}
]

arr2[0].paises[1].nombre // "uruguay"

//iterar un arreglo con objetos
for(var i=0; i < arr.length;i++){
    console.log(arr[i].nombre)
}


//  van a escribir una funcion que se llame obtenerNombres, que recibe por parametro un arreglo de objetos, cada uno de estos objetos tiene una propiedad nombre y la funcion debe devolver un nuevo arreglo solo con los nombres de los objetos


// una forma de resolverlo
var obtenerNombres = (arreglo)=>{
var newArr = []

for(var i=0;i<arreglo.length;i++){
    var nombre = arreglo[i].nombre
    newArr.push(nombre)
}

return newArr
}
 
// otra
var obtenerNombres = (arreglo)=>{
    var newArr = arreglo.map((el)=>{
        return el.nombre
    })

    return newArr
    }

// la mas optima
var obtenerNombres =  arreglo=>arreglo.map( el => el.nombre)


obtenerNombres(arr) // ["pepe","juan","jose"]
obtenerNombres([{nombre:"juan"},{},{}])

//ejemplo
var arr = [{nombre:"pepe",edad:15},{nombre:"juan",edad:20},{nombre:"jose",edad:18}]

var arr2 = [{nombre:"pepe",edad:22},{nombre:"juan",edad:17},{nombre:"jose",edad:12}]
//crear una funcion llamada filtrarPorEdad que reciba por parametro un arreglo con objetos, estos objetos tienen la siguiente estructura ===> {nombre:"juan",edad:20}
// la funcion debe devolver en un nuevo arreglo todos los nombres de los objetos cuyo propiedad edad sea mayor o igual a 18

var filtrarPorEdad = (arreglo)=>{
var newArr=[]

for(var i=0;i<arreglo.length;i++){
    var edad = arreglo[i].edad
    var nombre = arreglo[i].nombre
    if(edad>=18){
        newArr.push(nombre)
    }
}

return newArr
}

var filtrarPorEdad = (arreglo)=>{
 var filtro = arreglo.filter((el)=>{
    return el.edad >=18
 })

 var nombres = filtro.map((el)=>{
    return el.nombre
 }) //["pepe","juan"]
 
 return nombres
 //[{nombre:"pepe",edad:20},{nombre:"juan",edad:18}]
    }

//la mas optima
    var filtrarPorEdad = arreglo=>{
        return arreglo.filter(el=>el.edad>=18).map((el)=>el.nombre)
    }
    



filtrarPorEdad(arr) // ["juan","jose"]


//codewars
//https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript
function evenOrOdd(number) {
  if(number%2===0){
    return "Even"
  }else{
    return "Odd"
  }
}