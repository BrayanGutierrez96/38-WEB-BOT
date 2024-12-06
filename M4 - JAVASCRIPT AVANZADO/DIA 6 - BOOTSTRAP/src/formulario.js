const btnEnviar = document.querySelector("#enviar");
const URL = "https://example-unicorns-api.vercel.app/unicornios";
const inputNombre = document.querySelector("#nombre");
const inputPoder = document.querySelector("#poder");
const inputImagen = document.querySelector("#imagen");

let data = {
  name: "",
  power: "",
  img: "",
};
function obtenerDatos(evento) {
  const eventoNombre = evento.target.name;
  const eventoValue = evento.target.value

  const newData = {...data, [eventoNombre] : eventoValue }
  data = newData
  console.log(newData);
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
    fetch(URL, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).then((res) => {
      return;
    });
});
