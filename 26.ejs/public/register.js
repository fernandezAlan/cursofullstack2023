const form = document.querySelector('form')
const nombre = document.querySelector('input[type="text"]')
const email = document.querySelector('input[type="email"]')
const password = document.querySelector('input[type="password"]')

form.addEventListener('submit',(event)=>{
    event.preventDefault()
    fetch('http://localhost:3000/api/register',{
        method:'POST',
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        body:JSON.stringify({
            nombre:nombre.value,
            email:email.value,
            password:password.value
        })
    })
})