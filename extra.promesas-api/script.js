fetch("https://rickandmortyapi.com/api/character").then(function(res){
    res.json().then(function(data){
        console.log("data",data)
        var container = document.getElementById("container")
        data.results.forEach((personaje) => {
            container.innerHTML+=`<p>${personaje.name}</p> <img src=${personaje.image} width="100">`
            
        })
    })
})




console.log("hola mundo")
