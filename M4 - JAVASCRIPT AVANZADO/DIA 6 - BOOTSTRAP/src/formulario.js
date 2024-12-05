const btnEnviar = document.querySelector("#enviar");
const URL = "https://example-unicorns-api.vercel.app/unicornios";
const inputNombre = document.querySelector("#nombre");
const inputPoder = document.querySelector("#poder");
const inputImagen = document.querySelector("#imagen");
let nombre = "";
let poder = "";
let imagen = "";

inputNombre.addEventListener("change", () => {
  nombre = inputNombre.value;
});
inputPoder.addEventListener("change", () => {
  poder = inputPoder.value;
});
inputImagen.addEventListener("change", () => {
  imagen = inputImagen.value;
});

btnEnviar.addEventListener("click", (event) => {
  event.preventDefault();
  const data = { name: nombre, img: imagen, power: poder };
  fetch(URL, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then((res) => {
    return;
  });
});
