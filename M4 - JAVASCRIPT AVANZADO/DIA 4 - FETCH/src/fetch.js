const URL = "https://example-unicorns-api.vercel.app/unicornios";
const id = "6749036f75b49079275d8709"

//Mostrar Unicornios ✔️
async function obtenerUnicornios() {
  const res = await fetch(URL, {method:"GET"});
  const response = await res.json();
  console.log(response);
}
obtenerUnicornios()

//Mostrar unicamente un solo unicornio
async function obtenerUnicornio() {
    const res = await fetch(`${URL}/${id}`);
    const response = await res.json();
    console.log(response);
  }
//   obtenerUnicornio()


//Crear un Unicornio ✔️
async function crearUnicornio() {
  const data = {
    name: "Devf123",
    power: "volar",
    img: "imagen",
    age: 12,
  };
  const res = await fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const response = await res;
  console.log(response);
}
// crearUnicornio();

// Eliminar un unicornio ❌
async function eliminarUnicornio() {
    const res = await fetch(`${URL}/${id}`, {
      method: "DELETE",
    });
    const response = await res;
    console.log(response);
  }
//   eliminarUnicornio();

//Actualizar un unicornio
async function actualizarUnicornio() {
    const data = {
      name: "Devf123",
      power: "volar",
      img: "imagen",
      age: 12,
    };
    const res = await fetch(`${URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const response = await res;
    console.log(response);
  }
// actualizarUnicornio()