const contenedorTexto = document.querySelector("#texto")
const datos = {
    nombre:"jhon",
    apellido :"Doe",
    edad:22
}

const datosParseados = JSON.stringify(datos)
console.log(datosParseados);

localStorage.setItem("usuario", datosParseados)

console.log(localStorage.getItem("usuario"));

// let arreglo = []

// localStorage.setItem("apellido","Doe2")
// localStorage.getItem("John")
// // localStorage.clear()
// // localStorage.removeItem()

// console.log(localStorage);

// const texto = JSON.stringify(json)
// const json2 = JSON.parse(texto)


