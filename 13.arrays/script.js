// ARRGELOS- ARRAYS- LISTAS
var str = "hola"
var num = 1
var bool = true
//var lista = "hola" 1 true
var array = ["hola",1,true,"chau"]
var arrayvacio = []
// como acceder
array[0] //"hola"
array[1] // 1
array[2] // true

// arreglo aninados
var aninado = [1,2,3,[4,5,6]]

//metodos
//push- ingresar elementos al arreglo, como ultimo elemento del arreglo
array.push(7)
//pop - saca el ultimo elemento del arreglo y lo devuelve
array.pop()//7

//ushift - agregar elementos al arreglo, desde el primer indice
array.unshift(0)
// shift
array.shift()
//propiedad
array.length //4

// recorrer un arreglo (iterar un arreglo)

var arr = [1,2,3,4,5,6,7]
/*
una mala manera de mostrar los elementos
console.log(arr[0]) //1
console.log(arr[1]) //2
console.log(arr[2]) //3
console.log(arr[3]) //4

//buena manera
var i = 0
while(i < 6){ // 4 loops
    console.log(arr[i])
    i++
}
// iteracion normal
for(var i=0;i<7;i++){
    console.log(arr[i])
}
console.log("iteracion a la inversa")
//inversa
for(var i=6;i>=0;i--){
    console.log(arr[i])
}



console.log("primer arreglo")
for(var i=0;i<5;i++){
    console.log(arr[i])
}

console.log("segundo arreglo")
for(var i=0;i<2;i++){
    console.log(arr2[i])
}

console.log("tercer arreglo")
for(var i=0;i<3;i++){
    console.log(arr3[i])
}
*/
var arr = [1,2,3,4,5]//5 - 4
var arr2 =["hola","como estas"]
var arr3 = ["hola","alan",25]

// declarando
function iterar(arreglo){
    for(var i=0;i<arreglo.length;i++){ 
        console.log(arreglo[i])
    }
}

// ejecutando
/*
console.log("primer arreglo")
iterar(arr)
console.log("segundo arreglo")
iterar(arr2)
console.log("tercero arreglo")
iterar(arr3)


// crear una funcion llamada esPar.
// la funcion recibe por parametro un arreglo de numeros.
// recorrer el arreglo y si algun numero del arreglo es par, se imprime por consola.
// definiendo
function esPar(arreglo){
  console.log("el arreglo es", arreglo)
  for(var i=0;i<arreglo.length;i++){
    console.log("estamos en el loop")
    console.log("el elemento del arreglo en el indice "+ i + "es:"+ arreglo[i] )
    if(arreglo[i]%2===0){
        console.log("el elemento "+arreglo[i]+ " es par")
    }
  }
}

var arr= [1,2,3,4,5,6]
var arr2= [10,20,13,7]
var arr3 =[9,7,4,10,55]

//ejecutar
esPar(arr)
//esPar(arr2)
//esPar(arr3)
*/

//funciones callback
//por parametro reciben otras funciones
//sumar-resta-division-multiplicacion
function operar(num,fn){
    var resultado = fn(num)
    return resultado
}


function sumar(num){
    return num + 10
}
function restar(num){
    return num - 10
}
function multiplicar(num){
    return num * 10
}

var res = operar(25,sumar)
var res2 = operar(25,restar)
var res3 = operar(25,multiplicar)

function forEach(arr,fn){
    console.log("el arreglo a iterar es", arr)
    for(var i=0;i <arr.length;i++){
        fn(arr[i])
    }
}
var arr1 = [1,2,3,4,5]
function imprimir(el){
    console.log("el elemento es:",el)
}

function multiplicarpor2(num){
var res = num * 2
console.log("el resultado es",res)
}

forEach(arr,multiplicarpor2)
// metodos de arreglos:
// map - filter - foreach

