/*
var nombre = prompt("hola, como te llamas?")
alert("hola "+nombre)
*/
//NaN : not a number
//Number: el mnetodo number, transforma un string que represente un numero en un numero(tipo de dato number)
//var res1 = Number(prompt("ingrese un numero"))
//var res2 = Number(prompt("ingrese otro numero"))

//var num1 = Number(res1)
//var num2 = Number(res2)

//var res3 = res1 + res2
//alert("la suma de los numeros es " + res3)

//pedirle al usuario que ingrese su nombre(prompt)
//pedirle al usuario que ingrese su edad
//mostrar un mensaje (alert) que diga "hola (nombre), tu edad es (edad), naciste en el año(año de nacimiento)"

var nombre = prompt("ingrese su nombre")
var edad = Number(prompt("ingrese su edad"))
var nacimiento = 2023 - edad

alert("hola "+nombre +",tu edad es "+edad +", naciste en el año "+ nacimiento)

var num = 1
//incrementar una variable
num ++
num = num + 1

//decrementar la variable
num --
num = num - 1