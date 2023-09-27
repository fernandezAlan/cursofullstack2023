/*
Introducción a la programación orientada a objetos (POO)

¿Qué es POO?

la POO es un paradigma de programación que se basa en la creación de objetos y en la interacción entre ellos. La POO ofrece varias ventajas y es ampliamente utilizada en el desarrollo de software en la actualidad.

Conceptos básicos de POO

Clases y objetos

Una clase es un conjunto de atributos y métodos que describen un tipo de objeto. Por ejemplo, si estuviéramos desarrollando un sistema de ventas, podríamos tener una clase llamada "Producto" que tenga atributos como el nombre, la descripción y el precio, y métodos como "añadir al carrito" y "eliminar del carrito".

Un objeto, por otro lado, es una instancia de una clase. Es decir, es una entidad específica que tiene sus propios valores de atributos y puede utilizar los métodos de la clase. Siguiendo el ejemplo anterior, podríamos crear un objeto de la clase "Producto" llamado "camiseta" que tenga un nombre de "Camiseta de algodón", una descripción de "Camiseta suave y cómoda" y un precio de $20.00.

La creación de un objeto de una clase se llama instanciación. Cuando se instancia una clase, se reserva espacio en la memoria para almacenar el objeto y se inicializan los atributos con los valores proporcionados. Después de la instanciación, el objeto puede ser manipulado y utilizado por el programa a través de los métodos de la clase.

Es importante destacar que las clases son una forma de definir objetos, pero no son los objetos en sí mismas. Son plantillas o moldes que se utilizan para crear objetos específicos. Los objetos, por otro lado, son instancias concretas de una clase, con valores de atributos y comportamientos únicos.

En resumen, una clase es una plantilla que define un tipo de objeto, mientras que un objeto es una instancia concreta de una clase con valores de atributos y comportamientos específicos. La instanciación de una clase crea un objeto que puede ser manipulado y utilizado por el programa.

ejemplo:
*/

//definimos la clase
//molde




  class Persona {
    constructor(nombre){
        this.nombre = nombre
    }
    saludar(persona){
        console.log("hola "+ persona.nombre+ ", yo soy" + this.nombre)
    }
  }

  var pepe = new Persona("pepe")
  var juan = new Persona("juan")








  class Producto {
    constructor(nombre, descripcion, precio,stock) {
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.precio = precio;
      this.stock = stock;
     
    }
    
    obtenerStock(){
        return this.stock 
    }


    añadirAlCarrito(cantidad){
          this.stock= this.stock - cantidad
    }
  }





  class Carrito {
      constructor(){
          this.productos=[];
          this.total=0;
  }
  anadirProducto(producto,cantidad) {
      if(producto.stock>=1 && producto.stock >= cantidad){
          this.productos.push({
              nombre:producto.nombre,
              cantidad:cantidad,
              precio:producto.precio,
              total:producto.precio * cantidad
          })
          producto.añadirAlCarrito(cantidad)
      }
      else{
          console.log("el producto "+producto.nombre+" no tiene stock")
      }
  }
  }
  // instanciamos la clase
  

  var carrito = new Carrito()
  var camisa = new Producto("Camisa", "Camisa blanca de manga larga", 5000,10);
  
  carrito.anadirProducto(camisa,3)

  
  /*
  Encapsulación
  , la encapsulación es el concepto de ocultar los detalles de implementación de un objeto y exponer solo una interfaz pública que otros objetos pueden utilizar. En JavaScript, podemos lograr la encapsulación utilizando propiedades y métodos privados y públicos.
  
  A partir de ES6, podemos utilizar la sintaxis de clase para definir clases en JavaScript, lo que nos permite definir propiedades y métodos públicos y privados. Podemos marcar las propiedades y métodos como privados utilizando el prefijo #. Por ejemplo, en la clase Producto que definimos anteriormente, podríamos marcar la propiedad stock como privada de la siguiente manera:
  */
  //funcion contructora
  function Persona(nombre,edad,pais){
    var _pais = pais
     this.nombre = nombre;
     this.edad = edad

     this.saludar= function(){
        console.log("hola yo soy "+ this.nombre + " yo soy de " + _pais)
    }
  }
 //scopes (alcanze de las variables de una funcion)
  class Persona{
    constructor(nombre,edad){
        var _pais= "argentina"
        var _edad = edad
        this.nombre = nombre;
        //this.edad = edad
        this.saludar = function(){
            console.log("hola yo soy "+ this.nombre + " yo soy de " + _pais)
        }
        this.getEdad = function(){
            return _edad
        }
        this.setEdad = function(edad){
            if(edad>0 && typeof(edad)==="number"){
                _edad = edad
            }
        }
    }
 
  }

  class Producto {
    _stock;
      constructor(nombre, descripcion, precio,stock) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this._stock = stock
      }
      
      añadirAlCarrito(cantidad){
            this._stock= this._stock - cantidad
      }
      getStock(){
        return this._stock
      }
    }
  
    var producto = new Producto("zapatillas","zapatillas comodas",5000,10)
  /*
  estos metodos privados pueden dar un error si no esta utilizando la ultima version de los navegadores, prueba utilizar esta manera de encapsulacion si no:
  
  */
  class Producto {
    _stock;
      constructor(nombre, descripcion, precio,stock) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        _stock = stock;
      }
      
      añadirAlCarrito(cantidad){
            _stock= _stock - cantidad
      }
      verStock(){
          return _stock
      }
    }
  
  /*
  Herencia
  La herencia es un concepto importante en la programación orientada a objetos que permite a una clase (la clase hija o subclase) heredar propiedades y métodos de otra clase (la clase padre o superclase). En JavaScript, la herencia se puede lograr utilizando el mecanismo de prototipos.
  
  En JavaScript, cada objeto tiene un prototipo que actúa como una plantilla para ese objeto. Cuando se accede a una propiedad o método de un objeto, JavaScript busca primero en el objeto mismo para ver si tiene esa propiedad o método. Si no lo encuentra, busca en su prototipo. Si el prototipo tiene un prototipo propio, JavaScript sigue buscando en la cadena de prototipos hasta que encuentra la propiedad o método que está buscando.
  
  Para implementar la herencia en JavaScript, podemos crear una clase hija que tenga como prototipo una instancia de la clase padre. Podemos hacer esto utilizando el método Object.create para crear una nueva instancia del prototipo de la clase padre y luego agregar propiedades y métodos adicionales a la clase hija según sea necesario.
  
  Por ejemplo, supongamos que tenemos una clase Animal con propiedades y métodos como nombre, sonido, y hacerSonido. Podemos crear una clase hija llamada Perro que herede de Animal de la siguiente manera:
  
  */
  class Animal {
      constructor(nombre, sonido) {
        this.nombre = nombre;
        this.sonido = sonido;
      }
      
      hacerSonido() {
        console.log(this.nombre + " hace " + this.sonido);
      }
    }
    
    class Perro extends Animal {
      constructor(nombre) {
        super(nombre, "ladrido");
      }
    }
    
    const miPerro = new Perro("Fido");
    miPerro.hacerSonido(); // "Fido hace ladrido"
  
    
  
  
  
  
    class Persona {
      constructor(nombre,edad,apellido){
        this.nombre = nombre;
        this.apellido= apellido;
        var _edad =  edad;
      }
      saludar(){
        return "hola yo soy "+this.nombre+" "+this.apellido
      }
      mostrarEdad(){
        return _edad
      }
      compararEdad(persona){
        if(persona.edad > _edad){
          return "esa "+ persona.nombre + " es mas grande que yo"
        }
        else if(persona.edad === _edad){
          return "esa "+ persona.nombre +" tiene mi misma edad"
        }
        else{
          return "esa "+ persona.nombre +" es mas chica que yo"
        }
      }
    }
  
    var alan = new Persona("alan",28,"fernandez")
    var pepe = new Persona("pepe",30,"Gonzales")