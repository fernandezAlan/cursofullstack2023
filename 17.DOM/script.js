//DOM (document object model)
document //DOM
//console.log(document)


//accediendo a un nodo del DOM
document.body.children[0]

//acceder al el texto de un nodo
document.body.children[0].textContent

//modificando el contenido del nodo
//document.body.children[1].textContent = "subtitulo"


//metodos para acceder a nodos dentro del DOM

//querySelector
//devuelve el primer elemento que matchee con la busqueda
var h1 = document.querySelector(".clase_1") //<h1></h1> <=== nodo
console.log("en la variable h1 hay: ",h1)

//querySelectorAll
var todosH1 = document.querySelectorAll(".clase_1")
console.log("querySelectorAll devuelve: ",todosH1) //<== devuelve un arreglo(NodeList)

//getElementsByClassName 
var clases = document.getElementsByClassName("clase_especial")
console.log("getElementsByClassName devuelve:",clases) //<== devuelve un arreglo(HTMLCollection)

//getElementsById 
var id = document.getElementById("especiall") //<=== devuelve un nodo
console.log("getElementById me devulve:",id)
/*

var img = document.createElement("img")
img.src = "https://img.freepik.com/fotos-premium/lindo-gatito-capucha-roja-generative-ai_751108-3740.jpg?w=2000"

console.log("este es el elemento que cree con el dom ==>",img)
//accedemos a los estilos atravez de la propiedad style
img.style.width = "100px"
img.style.height = "100px" //border-radious
img.style.borderRadius = "100px"

var img2 = document.createElement("img")
img2.src="https://images.unsplash.com/photo-1591871937631-2f64059d234f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
img2.classList.add("imagen")


//document.body.appendChild(img)
//document.body.appendChild(img2)
var container = document.getElementById("container")
container.classList.add("container")
container.appendChild(img)
container.appendChild(img2)
console.log("el container es",container)
*/
var container = document.getElementById("container")
container.classList.add("container")


var info= [
    {
        url:"https://images.unsplash.com/photo-1591871937631-2f64059d234f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
        title:"gatito 1"
    },
    {
        url:"https://img.freepik.com/fotos-premium/lindo-gatito-capucha-roja-generative-ai_751108-3740.jpg?w=2000",
        title:"gatito 2"
    },
    {
        url:"https://i0.wp.com/puppis.blog/wp-content/uploads/2022/02/abc-cuidado-de-los-gatos-min.jpg?resize=521%2C346&ssl=1",
        title:"gatito 3"
    }]
for(var i=0;i<info.length;i++){
    //creando los elementos
    var img = document.createElement("img")
    var title = document.createElement("h3")
    var subContainer = document.createElement("div")

    //seteando los valores de los nodos
    title.textContent = info[i].title
    img.src= info[i].url

    //añadir la clase a la imagen
    img.classList.add("imagen")

    //meter los nodos dentro del subcontainer
    subContainer.appendChild(title)
    subContainer.appendChild(img)

    //metiendo el subContainer dentro del container
    container.appendChild(subContainer)
}

//innerHTML <=== propiedad
var container2 = document.getElementById("container_2") 
/*
var h3 = document.createElement("h3")
h3.textContent = "soy un h3"
container2.appendChild(h3)
*/
var titulo = "gatito 4"
container2.innerHTML = `
    <div>
        <h2>${titulo}</h2>
        <img src='https://i0.wp.com/puppis.blog/wp-content/uploads/2022/02/abc-cuidado-de-los-gatos-min.jpg?resize=521%2C346&ssl=1' class='imagen'>
    </div>`

