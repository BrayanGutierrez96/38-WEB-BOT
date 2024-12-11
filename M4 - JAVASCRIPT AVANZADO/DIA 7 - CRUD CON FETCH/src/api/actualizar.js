import obtenerUnSoloUnicornio from "./obtenerUnSoloUnicornio.js";
const btnEnviar = document.querySelector("#enviar");
const URL = "https://example-unicorns-api.vercel.app/unicornios";
const inputNombre = document.querySelector("#nombre");
const inputPoder = document.querySelector("#poder");
const inputImagen = document.querySelector("#imagen");
const urlParams = new URLSearchParams(window.location.search).get("id");
const contenedor = document.querySelector("#contenedor")

obtenerUnSoloUnicornio(urlParams, URL, contenedor)

let data = {};
function obtenerDatos(evento) {
  const eventoNombre = evento.target.name;
  const eventoValue = evento.target.value;

  const newData = { ...data, [eventoNombre]: eventoValue };
  data = newData;
}
inputNombre.addEventListener("change", (evento) => {
  obtenerDatos(evento);
});
inputPoder.addEventListener("change", (evento) => {
  obtenerDatos(evento);
});
inputImagen.addEventListener("change", (evento) => {
  obtenerDatos(evento);
});

btnEnviar.addEventListener("click", (event) => {
  event.preventDefault();
  if (!data.name && !data.img && !data.power) {
    alert("Debes de completar por lo menos un dato para actualizar");
    return;
  }
  alert("unicornio actualizado");
  fetch(`${URL}/${urlParams}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((res) => {
    window.location.assign("index.html");
  });
});
