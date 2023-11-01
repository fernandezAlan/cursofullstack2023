const form = document.querySelector('form')
const email = document.getElementById('email')
const password = document.getElementById('password')

form.addEventListener('submit',async (event)=>{
    event.preventDefault()
    const res = await fetch('http://localhost:3000/auth/login',{
        method:'POST',
        body:JSON.stringify({
            email:email.value,
            password:password.value
        }),
        headers:{
            "Content-Type": "application/json",
        }
    })
    const data = await res.json()
    localStorage.setItem('user_id',data._id) 
    window.location.href = 'http://localhost:3000/view/profile';
    
})