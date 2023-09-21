var input = document.getElementById("input-task")
var botonAdd = document.getElementById("btn-add")
var taskContainer = document.getElementById("task-container")
// vamos a usar este arreglo para guardar las tareas y tener un registro de todas las tareas que van ingresando
// cada tarea va a ser un objeto
var tasks =[] 
//indice que vamos a usar como id para identificar a cada tarea
var index = 1 


botonAdd.addEventListener("click",()=>{
    // este es el objeto que va a representar una tarea y vamos a guardarlo en el arreglo 'task'
    var task = {
        id:index,
        text:input.value,
        done:false // done representa si la tarea esta terminada o no (por defecto es falsa)
    }

    tasks.push(task)
    index++ // <=== incrementamos index despues de crear el objeto y guardarlo
    print() // <=== una vez que agregamos el objeto ejecutamos esta funcion que imprime las tareas en la pantalla(osea agrega elementos al DOM)
})

function print(){
    taskContainer.innerHTML = "" //<== la funcion comienza "limpiando" todo el taskContainer para poder agregar otra vez las tareas (podes probar que pasa si comentas esta linea que "limpia" el task container y ver que pasa cuando agregas o borras tareas para entender su funcionamiento)

    //aca recorremos el arreglo de tareas y a partir de cada objeto crear los elementos(tarea)  

    // la diferencia entre tasks y task
    //tasks <=== el arreglo de tareas
    //task <=== la tarea en particular(el objeto)
    tasks.forEach((task)=>{
        //task: es el objeto que metimos dentro del arreglo tasks
        taskContainer.innerHTML+= `
        <div class="task" id="task-${task.id}">
            <p id="text-${task.id}" class="${task.done ? "text-disabled" : "" }">${task.text}</p> 
            <input class="form-check-input" type="checkbox" id="check-${task.id}" ${task.done ? "checked" : ""}>
            <button type="button" class="btn btn-danger" id="btn-delete-${task.id}">Borrar</button>
        </div>`
    })

    // cada vez que imprimimos las tareas en la pantalla tenemos que volver a agregar los eventos
    addEventsToCheck()
    addEventToDelete()
}

// esta funcion le agrega los eventos al checks
function addEventsToCheck(){

    //Array.from() <=== este es un metodo que usamos para transformar una coleccion de nodos a un arreglo
    //document.querySelectorAll <=== recordemos que este metodo nos devuelve una coleccion de nodos por eso tenemos que transformarlos en un arreglo para poder usar el metodo forEach

    var checks = Array.from(document.querySelectorAll('input[type="checkbox"]'))


    checks.forEach((check)=>{
        // le agregamos a cada check del arreglo un evento
        check.addEventListener("change",(event)=>{
            /*
            el metodo split:
             - es un metodo de strings
             - toma un string y lo transforma en un arreglo
             - en este caso "check-1" ==> split("-") ===> ["check","1"]
            */
           //event.target se refiere a cada check
            var index = Number(event.target.id.split("-")[1])
            // aca buscamos la tarea a la cual pertenece el check utilizando su id 
            var task = tasks.filter((task)=>task.id===index)[0]

            //buscamos el texto en el DOM al cual pertenece el check y la tarea
            var id = "text-"+ index
            var text = document.getElementById(id)

            // si la tarea esta terminada o no añadimos o sacamos la clase "text-disabled"
            // y cambiamos task.done segun corresponda
            if(task.done){
                text.classList.remove("text-disabled")
                task.done = false
            }else{
                text.classList.add("text-disabled")
                task.done = true
            }
        })
    })
}


function addEventToDelete(){
    var buttons = Array.from(document.querySelectorAll('.btn-danger'))
    buttons.forEach((btn)=>{
        btn.addEventListener("click",(event)=>{
            var id = Number(event.target.id.split("-")[2])
            tasks = tasks.filter((task)=>task.id!==id)
            print()
        })
    })
}













