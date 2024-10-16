const inputsNodeList = document.querySelectorAll(".formulario__input");
const btn = document.querySelector("#btn");
let datos = {};
//-----------Json--------------
// {
//     "llave":"valor"
// }
//----------Objeto-------------
// {
//     llave:"valor"
// }

function enviarDatos(evento) {
  evento.preventDefault();
  let comprobador = true;
  for (let i = 0; i < inputsNodeList.length; i++) {
    const input = inputsNodeList[i];
    if (input.value === "") {
      alert("Completa el campo " + input.name);
      comprobador = false;
      return;
    }
    if (comprobador) {
      datos = { ...datos, [input.name]: input.value };
    }
  }
  const datosString = JSON.stringify(datos); //Convierte un tipo de dato a JSON string
  localStorage.setItem("usuario", datosString); //Me permite guardar la informacion en el localStorage
  window.location.href = "pagina2.html" //Permite cambiar la ruta despues de el servidor, a la ruta que nosotros le especiquemos, en sí lo que permite es redireccionarnos a dónde le indiquemos
}

btn.addEventListener("click", function (evento) {
  enviarDatos(evento);
});
