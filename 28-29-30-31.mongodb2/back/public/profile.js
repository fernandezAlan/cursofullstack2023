const text = document.getElementById('add_task')
const button = document.getElementById('btn_task')
const split = window.location.href.split('/')
const userId = split[split.length - 1]
const logout = document.getElementById('logout')
button.addEventListener('click',async ()=>{
    await fetch('http://localhost:3000/task/create',{
        method:'POST',
        body:JSON.stringify({
            text:text.value,
            userId:userId
        }),
        headers:{
            "Content-Type": "application/json",
        }
    })
    window.location.reload()
})

const deleteTask = async (id)=>{
    await fetch('http://localhost:3000/task/'+id,{
        method:'DELETE', 
    })
    window.location.reload()
}

logout.addEventListener('click',async ()=>{
    
    const token = document.cookie.split('=')[1]
    await fetch('http://localhost:3000/auth/logout',{
        method: 'GET',
        withCredentials: true,
        credentials: 'include',
        headers: {
            'Authorization': 'Bearer '+ token,
            'X-FP-API-KEY': 'iphone', //it can be iPhone or your any other attribute
            'Content-Type': 'application/json'
        }
    })
    document.cookie = "token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
    console.log('cookies',document.cookie)
    window.location.reload()
})


















/*
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
*/

