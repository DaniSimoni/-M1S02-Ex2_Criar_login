const user = {
    username: "",
    password: ""
}
const usuarioCorreto = {
    nameadd: "Daniel",
    senha: "1234"
};


const username = document.getElementById('username')
const password = document.getElementById('password')


const handleChangeUserName = (e) => {user.username=e.target.value}
const handleChangePassword = (e) => {user.password=e.target.value}


username.addEventListener('change', handleChangeUserName )
password.addEventListener('change', handleChangePassword)

const form = document.querySelector('#form')

form.addEventListener('submit', e => {
    e.preventDefault();
    clicou();
})

function clicou () {

    const db = JSON.parse(localStorage.getItem('db'))
    
    
if (user.username == db.nameadd && user.password == db.senha) {

        alert("Você está logado!")
        location.href = './loginin.html';
   
    }else {
        alert("Credenciais incorretas")
    }
};




window.onload = () => {
    localStorage.setItem('db',JSON.stringify(usuarioCorreto))
};


