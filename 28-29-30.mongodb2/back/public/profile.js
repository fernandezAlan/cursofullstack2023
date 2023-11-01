const user_id = localStorage.getItem('user_id')
const taskContainer = document.getElementById('tasks_container')
const getTask = async ()=>{
    const data = await fetch('http://localhost:3000/task/getTask',{
        method:'POST',
        body:JSON.stringify({
            userId:user_id
        }),
        headers:{
            "Content-Type": "application/json",
        }
    })

    const tasks = await data.json()
    tasks.forEach(task => {
        taskContainer.innerHTML+= `<p>${task.text}</p>`
    });

    console.log('task',tasks)
}

getTask()

