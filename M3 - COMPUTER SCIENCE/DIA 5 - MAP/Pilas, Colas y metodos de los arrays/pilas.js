const cilindro = [];

const plato1 = 0;
const plato2 = 9;
const plato3 = 4;
const plato4 = 1;
const plato5 = 7;
const plato6 = 5;

cilindro.push(plato1);
cilindro.push(plato2);
cilindro.push(plato3);
cilindro.push(plato4);
cilindro.push(plato5);
cilindro.push(plato6);

//Estructura de datos de pila LIFO(LAST IN FIRST OUT) ultimo en entrar primero en salir
// cilindro.pop()
// cilindro.pop()
// cilindro.pop()
// cilindro.pop()
// cilindro.pop()

// console.log(cilindro);

//Estructura de datos de cola FIFO (FIRST IN FIRST OUT) primero en entrar primero en salir

// cilindro.shift()
// cilindro.shift()
// cilindro.shift()
console.log(cilindro);

// Metodo Filter para buscar elementos

const respuesta = cilindro.filter(function (plato) {
  return plato === "plato 5";
});
console.log(respuesta);

const respuesta2 = cilindro.find(function (plato) {
  return plato === "plato 10";
});
console.log(respuesta2);

cilindro.sort();

console.log(cilindro);
