import chalk from "chalk";
import { timeDay } from "d3-time";

console.log(chalk.blue("hola") + chalk.red(" mundo"));
console.log(chalk.green("hola mundo2"));
console.log("hola mundo3");
console.log("hola mundo4");
console.log("hola mundo5");

const day = timeDay();

console.log(day);

// then catch
fetch("https://fakestoreapi.com/products")
  .then(function (productos) {
    return productos.json();
  })
  .then(function (productos) {
    const productosSimples = productos.map(function (producto) {
      return {
        titulo: producto.title,
        id: producto.id,
        precio: producto.price,
      };
    });
    console.log(productosSimples);
  })
  .catch(function (error) {
    console.log(error);
  });

//async/await

async function obtenerProductos() {
  try {
    const productos = await fetch("https://fakestoreapi.com/products");
    const productosParseados = await productos.json();
    console.log(productosParseados);
  } catch (error) {
    console.log(error);
  }
}
obtenerProductos();
