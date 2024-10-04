// const boxes = document.querySelectorAll(".box");
// boxes.forEach((element) => {
//   element.addEventListener("click", function (event) {
//     const clickedBox = event.target;
//     alert(`Has clicado en: ${clickedBox.textContent}`);
//   });
// });

const render = document.querySelector("#render");
const tareas = document.querySelector("#tareas");
const boton = document.querySelector("#boton");

function agregarTarea() {
  const contenedor = document.createElement("div");
  const tarea = document.createElement("div");
  const checkbox = document.createElement("input");
  contenedor.classList = "contenedor";
  tarea.classList = "tarea";
  checkbox.type = "checkbox";
  tarea.textContent = tareas.value;
  render.appendChild(contenedor);
  contenedor.appendChild(tarea);
  contenedor.appendChild(checkbox);

  checkbox.addEventListener("click", function () {
    if (checkbox.checked) {
      tarea.style.textDecoration = "line-through";
    } else {
      tarea.style.textDecoration = "none";
    }
  });
}

boton.onclick = function (evento) {
  evento.preventDefault();
  if (!tareas.value) {
    return;
  }
  agregarTarea();
};
