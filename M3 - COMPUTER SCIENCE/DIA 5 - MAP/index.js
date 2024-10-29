// function miFuncion (funcion, otroMensaje){
//     console.log(otroMensaje);
// }

// miFuncion(mensaje("hola mundo"), "Hola clase")

// function mensaje(mensaje){
//     console.log(mensaje);
// }
// const array = ["a","b","c","d","e","f"]
// const numeros = [1,2,4,5,6]

// array.forEach(function(vocal,i){
//     if(i < 5){
//         console.log(vocal);
//     }
// });

// for(let i= 0; i<array.length; i++){
//     console.log(array[i]+" - " + i);
// }

// const numerosImpares = numeros.map(function(numeros){
//   return numeros % 2 !== 0
// })

// console.log(numerosImpares);
import data from "./data.js"
let productosEconomicos = [];
const productos = [
  {
    nombre: "Cafe",
    precio: 3,
    calificacion: "4.5",
    proveedor: "Juan Valdez",
    paisOrigen: "Colombia",
  },
  {
    nombre: "Nachos",
    precio: 2,
    calificacion: "4.7",
    proveedor: "Roberto Gomez Bolaños",
    paisOrigen: "Mexico",
  },
  {
    nombre: "sopaipillas",
    precio: 1,
    calificacion: "4.9",
    proveedor: "La abuela",
    paisOrigen: "Chile",
  },
  {
    nombre: "Spaghetti",
    precio: 2.5,
    calificacion: "4.2",
    proveedor: "Francesco Bernoulli",
    paisOrigen: "Italia",
  },
];

productos.forEach(function (producto) {
  if (producto.precio <= 2) {
    productosEconomicos.push(producto);
  }
});

const nombreProductos = productos.map( (producto) => {
    return producto.precio;
});


// const productosEconomicos2 = productos.filter((producto)=>{if (producto.precio <= 2) {
//     return producto;
//   }})
  
console.log(nombreProductos);

// De la siguiente URL https://rickandmortyapi.com/api/character Extraer el nombre, la especie y la imagen de los primeros 20 personajes en un nuevo arreglo

