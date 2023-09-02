/*
1- crear una función que tome por parámetro un array con números y devuelva UN NUEVO array con todos los números del primer array multiplicados por dos.

2- crear una función que tome como parámetro un arreglo de strings y devuelva UN NUEVO arreglo con todos los strings del primero pero en mayúsculas.

3 crear una función que tome como parámetro un arreglo de números y devuelva UN NUEVO arreglo con solamente los números del primer arreglo que sean mayores a 10 (un filtro)
por ejemplo:
 si la función recibe este arreglo :[3,15,8,22,34,2] debe devolver este arreglo ===> [15,22,34] 
*/

//declarando
function multiplicar(arr){
var newArr = []
for(var i=0;i<arr.length;i++){
   var res =  arr[i] * 2 //4-6-8
   newArr.push(res) //[4,6,8]
}
return newArr
}

// ejecutar
var example = [2,3,4,5,6]
var arr2 = multiplicar(example)
var arr3 = multiplicar([10,20,30,40])
//console.log("arr2",arr2)
//console.log("arr3",arr3)

function mayusculas(arr){
    var newArr=[]
    for(var i=0;i<arr.length;i++){
       var res =  arr[i].toUpperCase()
       newArr.push(res)
    }

    return newArr
}

var may = mayusculas(["alan","hola","argentina"])
//console.log("may",may)


function map(arr,fn){
    var newArr=[]
    for(var i=0;i<arr.length;i++){
        var res = fn(arr[i])
        newArr.push(res)
    }
    return newArr
}

var map1 = map([2,3,4,5,6],function(el){
    return el * 2
})

var map2 = map([10,20,30],function(el){
    return el * 3
})


var map3 = map(["a","b","c"],function(el){
    return el.toUpperCase()
})

//console.log("map1",map1)
//console.log("map2",map2)
//console.log("map3",map3)


var map1 = map([2,3,4,5,6], el => el * 2)
var map2 = map([10,20,30], el => el * 3)
var map3 = map(["a","b","c"], el => el.toUpperCase())



var fn = function(){

}
// arrow function/ funciones flechas
var fn2 = ()=>{

}




function sumar(a,b){
    return a + b
}
// funcion flecha
var sumar = (a,b)=>{
    return a + b
}

var sumar = (a,b)=> a + b


function mayuscula(string){
    return string.toUpperCase()
}

var mayuscula = (string)=>{
    return string.toUpperCase()
}

var mayuscula = (string)=>string.toUpperCase()

var mayuscula = string => string.toUpperCase()


var arr = [1,2,3,4,5]
var res = arr.map((el)=>el * 2)
//console.log("res",res)

arr.forEach(function(el){
    //console.log("el",el)
})


//FILTRO

function filtro(arr){
    var newArr=[]
    for(var i=0;i < arr.length;i++){
        if(arr[i]>=10){
            newArr.push(arr[i])
        }
    }
    return newArr
}

function filtro (arr,fn){
    var newArr=[]
    for(var i=0;i < arr.length;i++){
        var cond = fn(arr[i]) // true-false
        if(cond){
            newArr.push(arr[i])
        }
    }
    return newArr
}

var res = filtro([3,15,8,22,34,2],function(el){
    return el %2===0
})
//console.log("res",res)

var arr = [1,2,3,4,5]
var pares = arr.filter(function(el){
    return el %2===0
})

console.log("pares",pares)



// van a crear una funcion que se llame cerosAlFinal, recibir un arreglo con elementos por parametro por ejemplo: 
// [10,0,"a",true,0,15,false,"b","c"]
// tiene que devolver un nuevo arreglo, con todos los ceros del arreglo original al final del nuevo arreglo

//[10,0,"a",true,0,15,false,"b","c"] ===>[10,"a",true,15,false,"b","c",0,0]
//[0,0,0,12,55,"a",0,false] ==== > [12,55,"a",false,0,0,0,0]


//[15,true,"a",10,0,0]

function cerosAlFinal(arr){
    var newArr=[]
    for(var i=0;i< arr.length;i++){
        if(arr[i] === 0){
            newArr.push(arr[i])
        }else{
            newArr.unshift(arr[i])
        }
    }
    return newArr
}

function cerosAlFinal(arr){
    var ceros = arr.filter(el=>el===0) //[0,0,0,0]
    var noCeros = arr.filter(el=>el!==0)//[1,2,3,4,5]
    var newArr = noCeros.concat(ceros) //[1,2,3,4,5,0,0,0,0]
    return newArr
}