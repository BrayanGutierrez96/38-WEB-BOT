// console.log("---Todo en Pila de ejecución---");
// console.log(1);
// console.log(2);
// console.log(3);

// console.log("--El 2 y 3 van a la Cola de Ejecución---");
// console.log(1);

// setTimeout(function(){
//     return console.log(2);
// },3000)

// setTimeout(function(){
//     return console.log(3);
// },2000)

// console.log(4);

// console.log("---Simulacion de Cuello de Botella---");
// console.log(1);
// setTimeout(function(){
//     return console.log(2);
// }, 2000)

// for(let i = 0; i < 9; i++);
// console.log(3);

console.log("Promesa");

// const promesa = new Promise((resolve) => {
//     console.log("Soy la promesa");
//   resolve(1);
// });

// promesa.then(function (mensaje) {
//   console.log(mensaje);
// });

function funcion() {
  const promesa2 = new Promise((resolve) => {
    console.log("Soy la promesa 2");
    resolve(2);
  });
  promesa2.then(function (mensaje) {
    console.log(mensaje);
    setTimeout(function () {
      console.log("soy el setTimeout");
    }, 0);
  });
}
funcion();
function funcion2() {
    console.log("funcion 2");
}

funcion2();

console.log("2");

// setTimeout(function(){
//     console.log("3");
// }, 0)
