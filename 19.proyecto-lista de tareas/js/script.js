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
            <input class="form-check-input" onClick="verifyCheck(${task.id})" type="checkbox" id="check-${task.id}" ${task.done ? "checked" : ""}>
            <button type="button" class="btn btn-danger" id="btn-delete-${task.id}" onClick="deleteTask(${task.id})">Borrar</button>
        </div>`
    })

    // cada vez que imprimimos las tareas en la pantalla tenemos que volver a agregar los eventos
   //addEventToDelete()
}


function verifyCheck(id){
    var task = tasks.filter((task)=>task.id ===id)[0] //{}
    var check = document.getElementById("check-"+id)
    var text = document.getElementById("text-"+id)
    console.log("check",task)
    if(task.done){
        check.checked = false
        text.classList.remove("text-disabled")
        task.done = false
    }else{
        check.checked = true
        text.classList.add("text-disabled")
        task.done = true
    }
  
}


function deleteTask(id){
    tasks = tasks.filter((task)=>task.id!== id)
    print()
}









