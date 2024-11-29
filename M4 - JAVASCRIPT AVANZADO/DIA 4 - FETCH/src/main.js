// const suma = function(num1, num2) {
//     return num1 + num2;
// }

// setTimeout(function() {
//     console.log(suma(1, 2));
// }, 0);

// console.log(suma(5,5));

// const promesa = new Promise((resolve) => {
//     resolve(5);
// });

// then catch
// const lista = document.querySelector("#lista");

// fetch("https://rickandmortyapi.com/api/character")
//   .then((response) => {
//     return response.json();
//   })
//   .then((response) => {
//     const respuesta = response.results;
//     const nombres = respuesta.map((personaje) => {
//       return personaje.name;
//     });
//     console.log(nombres);
//     // lista.innerHTML = nombres;
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// async await --> try catch
async function obtenerNombres() {
  const response = await fetch("https://rickandmortyapi.com/api/character")
  const res = await response.json();
  const results = res.results;
  const nombres = results.map((personaje) => {
    return personaje.name;
  });
  console.log(nombres);
}

obtenerNombres();





//Funciones

// function (){
//     this ---> tiene acceso al this
// }

// function funcion (){
//     this ---> tiene acceso al this
// }

// const funcion2 = function(){
//     this ---> tiene acceso al this
// }

//funcion tipo flecha
// ()=>{
//     this --> no tiene acceso al this
// }
