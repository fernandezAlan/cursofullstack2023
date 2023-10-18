const form = document.querySelector('form')
const email = document.querySelector('input[type="email"]')
const password = document.querySelector('input[type="password"]')

form.addEventListener('submit',(event)=>{
    event.preventDefault()
    fetch('http://localhost:3000/api/login',{
        method:'POST',
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        body:JSON.stringify({
            email:email.value,
            password:password.value
        })
    }).then(()=>{
        window.location.href = 'http://localhost:3000/';
    })
})