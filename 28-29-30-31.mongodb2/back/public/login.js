const form = document.querySelector('form')
const email = document.getElementById('email')
const password = document.getElementById('password')

form.addEventListener('submit',async (event)=>{
    try{
        event.preventDefault()
        const response =  await fetch('http://localhost:3000/auth/login',{
            method:'POST',
            body:JSON.stringify({
                email:email.value,
                password:password.value
            }),
            headers:{
                "Content-Type": "application/json",
            }
        })
        const token = await response.text()
    
  
       document.cookie = 'token = ' + token
       window.location.href = 'http://localhost:3000/view/profile/';
    }catch(error){
        form.innerHTML+= `<div>las credenciales son invalidas</div>`
    }
    

    /*
    localStorage.setItem('user_id',data._id) 
    window.location.href = 'http://localhost:3000/view/profile';
    
    */
    
})