import obtenerUnicornios from "./obtenerUnicornios.js";
//Funcion que permite eliminar un unicornio dinamicamente
const eliminarUnicornio = function(botones,URL,identificadores, contenedor){
    botones.forEach((boton, indice) => {
    boton.addEventListener("click", async () => {
      try {
        const res = await fetch(`${URL}/${identificadores[indice].id}`, {
          method: "DELETE",
        });
        if (!res) {
          alert("Hubo un error");
          return;
        }
        obtenerUnicornios(contenedor, URL);
      } catch (error) {
        console.log(error);
      }
    });
  });
}

export default eliminarUnicornio