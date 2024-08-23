const email = document.getElementById('email')
const password = document.getElementById('password')
const submit = document.getElementById('btn_submit')
const login = document.getElementById('login')
const logout = document.getElementById('logout')
const exploer= document.getElementById('explorer');
if (submit) {
    submit.addEventListener('click', () => {
        localStorage.setItem('email', email.value)
        localStorage.setItem('password', password.value)
    //    if(localStorage.setItem('email', email.value)== null) {
    //     alert("please enter email")
    //    }
    //    else
    //    if( localStorage.setItem('password', password.value)<8){
    //     alert("password must be 8 character")

    //    }

       
    })
}

if (localStorage.getItem('email') || localStorage.getItem('password')) {
    if (login && logout) {
        login.style.display = 'none'
        logout.style.display = 'block'
    }
}
else {
    if (login && logout) {
        login.style.display = 'block'
        logout.style.display = 'none'
    }
}
function logout_fun(){
    localStorage.removeItem('email')
    localStorage.removeItem('password')
    window.location.href='./form.html'
}
function alterfunction(){
    alert('under development')
}