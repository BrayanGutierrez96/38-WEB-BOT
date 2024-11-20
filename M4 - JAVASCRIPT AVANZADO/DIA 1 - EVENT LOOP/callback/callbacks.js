//Callbacks
function numero() {
  return 100;
}
function numerocien(funcion) {
  return funcion();
}
function numerodocientos() {
  return 200;
}

function sumarNumeros(callback3, callback1, callback2) {
  return callback1(callback3) + callback2();
}

console.log(sumarNumeros(numero, numerocien, numerodocientos));

const saludo = function () {
  return "Hola";
};

const usuario = function (nombre, saludo) {
  console.log(`${saludo()} ${nombre}`);
};

usuario("Brayan", () => {
  return "Que tal?";
});


//Ejemplo de callback hell
 
