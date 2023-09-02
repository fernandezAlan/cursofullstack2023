/*
1- crear una funcion llamada reverseString que tome como parametro un string y devuelva el string alreves
por ejemplo la funcion puede recibir el siguiente string "hola" y deberia devolver el string "aloh"
tomen en cuenta que se puede iterar un string de la misma manera que iteramos un arreglo, usen un for para acceder a cada caracter
pueden leer el siguiente articulo para saber como iterar un string y trabjar con cada uno de sus caracteres:
https://buzzcoder.gitbooks.io/codecraft-javascript/content/string/loop-through-a-string.html



2- crear una funcion llamada filtroDeStrings la funcion recibe un arreglo con varios tipos de datos y debe devolver un nuevo arreglo pero solamente con los strings 
ej:
recibimos el siguiente arreglo por parametro ====> [12,false,"b",10,"a","hola",24] 
y la funcion debe devolver =====> ["b","a","hola"] 


3- Manejar dos arreglos
Debés crear una función llamada `arrayHandler` que reciba dos arreglos de igual largo como parámetros y muestre en la consola “Soy {elemento de array 1} y yo soy {elemento de array 2}"".

Ejemplo:
arrayHandler([1,2,3,4], ["h","o","l","a"]) debe mostrar: 
		Soy 1 y yo soy h
        Soy 2 y yo soy o
        Soy 3 y yo soy l
        Soy 4 y yo soy a


4-Mezclar arreglos
Debés crear una función llamada `mezclarArreglos` que reciba dos arreglos como parámetros y devuelva uno nuevo con los elementos de ambos, de 1 en 1.

Ejemplo: 
mezclarArreglos([1,2,3,4],["h","o","l","a"]) debe retornar [1, "h", 2,"o", 3,"l",4,"a"]
mezclarArreglos([1,2,3,4], ["h","p"]) debe retornar [1, "h", 2, "p", 3 , 4]
mezclarArreglos(["h","p"], [1,2,3,4]) debe retornar ["h", 1, "p", 2, 3 , 4]

5-Mínima Suma
Debés crear una función llamada `minSum` que reciba un arreglo de números desordenados  y devuelva la suma entre los dos números más chicos.

Ejemplo: 
minSum([7, 6, 5, 4, 3, 2, 1]) debe retornar 3 (2 + 1)
minSum([1, 10, 43, 900, 20, 8]) debe retornar 9

*/