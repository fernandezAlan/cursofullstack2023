/*
function esPar(num){
    if(num%2===0){
        return true
    }else{
        return false
    }
}

function esPar(num){
    return num%2===0
}

var num = Number(prompt("ingrese un numero"))
if(esPar(num)){
    alert("el numero "+ num + " es par")
}else{
    alert("el numero "+ num + " es impar")
}
*/

// van a crear una funcion, llamada loopDepares,  hacer un loop del numero 0 al 50, y va a mostrar por consola todos los numeros pares;
// loopDepares()
 //0-50(pares)
 //0-2-4-6 
 // while()
 function esPar(num){
    return num%2===0
}
 function loopDepares(){
    var index =1;
    while(index<=50){
        // mostramos los numeros impares
        if(!esPar(index)){
            console.log(index)
        }
        index++
    }
 }

 loopDepares()
