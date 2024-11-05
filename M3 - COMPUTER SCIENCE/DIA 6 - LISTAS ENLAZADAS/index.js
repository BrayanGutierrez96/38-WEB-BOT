// const arregloNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

// arregloNumeros.forEach((numero)=>{console.log(numero);})

// const nuevoArreglo = arregloNumeros.map(function(numero){
//     return numero <7
// })

import data from "./data.js";
const cardContainer = document.querySelector("#card-container");
let currentHtml = "";

const newData = data.map((producto) => {
  const info = {
    price: producto.price,
    category: producto.category,
    image: producto.image,
    desc: producto.description,
    id: producto.id,
    title: producto.title,
  };
  return info;
});

newData.forEach((product) => {
  currentHtml += `<div class="card">
        <img
          class="card__img"
          src=${product.image}
          alt=""x
        />
        <div class="card__content">
        <h1>${product.title}</h1>
          <span class="card__price">Precio ${product.price}</span>
          <span class="card__category">Categoria ${product.category}</span>
          <p class="card__desc">
            ${product.desc}
          </p>
        </div>
      </div>`;
});
cardContainer.innerHTML = currentHtml;

const filterData = newData.filter((product) => product.category === "jewelery");

const foundData = data.find((product) => product.category === "men's clothing");

console.log(foundData);

function miFuncion(idDelUsuario) {
  const datoEncontrado = data.find((producto) => {
    return (producto.id = idDelUsuario);
  });
  if (!datoEncontrado) {
    alert("usuario no encontrado");
    return;
  }
  return datoEncontrado;
}
const total = data
  .filter((producto) => producto.category === "men's clothing")
  .map((producto) => producto.price)
  .reduce((suma, precio) => suma + precio);

console.log(total);