let usuario = document.querySelector("#usuario")

const datosJson = JSON.parse(localStorage.getItem("usuario"))


const nombre = document.createElement("div")
const apellido =document.createElement("div")
const edad = document.createElement("div")

nombre.textContent = `Nombre : ${datosJson.nombre}`
nombre.classList = "texto"
apellido.classList = "texto"
edad.classList = "texto"
apellido.textContent = `Nombre : ${datosJson.apellido}`
edad.textContent = `Nombre : ${datosJson.edad}`


usuario.appendChild(nombre)
usuario.appendChild(apellido)
usuario.appendChild(edad)
