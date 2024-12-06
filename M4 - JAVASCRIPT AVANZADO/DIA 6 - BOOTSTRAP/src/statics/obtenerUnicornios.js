const URL = "https://example-unicorns-api.vercel.app/unicornios";
async function obtenerUnicornios( contenedor ) {
    let currentHtml = ""
  const res = await fetch(URL);
  const unicorniosDB = await res.json();
  const unicornios = unicorniosDB.map((unicornio) => {
    return {
      nombre: unicornio.name,
      poder: unicornio.power,
      imagen: unicornio.img,
    };
  });
  unicornios.forEach(unicornio => {
    currentHtml +=`<div class=" card mb-3">
          <img
            src=${unicornio.imagen}
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 id="nombre-unicornio" class="card-title">${unicornio.nombre}</h5>
            <p id="desc" class="card-text">
              ${unicornio.poder}
            </p>
            <p class="card-text">
              <small class="text-body-secondary">#Devf</small>
              <small class="text-body-secondary">#Devf</small>
              <small class="text-body-secondary">#Devf</small>
            </p>
          </div>
        </div>`
  });
  return contenedor.innerHTML = currentHtml

}
export default obtenerUnicornios
