/*
ejemplo 1
var num = Number(prompt("ingrese un numero"))

if(num >= 10){
    alert("el numero que ingresaste es mas grande que 10 o igual a 10")
}else{
    alert("el numero que ingresaste es mas chico que 10")
}

// ejemplo 2
var num = Number(prompt("ingrese un numero"))

if(num % 2===0){
    alert("el numero "+ num + " es par")
}else{
    alert("el numero "+ num + " es inpar")
}
*/
// ejemplo 3
var divisa = prompt("ingrese una divisa")
if(divisa === "dolar" ||divisa === "EURO"){
    var pesos = prompt("ingrese los billetes")
    var dolar = 700
    var euro = 750
    divisa = divisa.toUpperCase()
    if(divisa === "DOLAR" || divisa=== "USD" || divisa === "DOLARES"){ // alguna de las dos condiciones tiene que ser true
        var res = Math.floor(pesos/ dolar)
        alert("tu cambio es: "+ res + " USD")
    }else if(divisa === "EURO" && pesos < 10000){
        
        var res = Math.floor(pesos/ euro)
        alert("tu cambio es: "+ res + " Eu")
        
    }
    else if(pesos > 10000){
        alert("no tenemos esa cantidad de euros")
    }
  
}
else{
    alert("esa divisa no esta permitida")
}

/*
if(divisa === "dolar"){
    var res = Math.floor(pesos/ dolar)
    alert("tu cambio es: "+ res + " USD")
}else{
    if(divisa === "euro"){
        var res = Math.floor(pesos/ euro)
        alert("tu cambio es: "+ res + " Eu")
    }else{
        alert("esa divisa no esta permitida")
    }
}

*/
/*
var res = divisa.toUpperCase()
switch (res) {
    case "DOLAR":
        var res = Math.floor(pesos/ dolar)
        alert("tu cambio es: "+ res + " USD")
        break;
        case "EURO":
            var res = Math.floor(pesos/ euro)
            alert("tu cambio es: "+ res + " Eu")
            break;
            
            default:
                alert("esa divisa no esta permitida")
                break;
            }
            */