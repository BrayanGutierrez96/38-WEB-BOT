async function obtenerUnSoloUnicornio(id, URL, contenedor) {
    try{
        const respuesta = await fetch(`${URL}/${id}`)
        const unicornio = await respuesta.json()
        if(!unicornio){
            alert("Unicornio no encontrado")
        }
        contenedor.innerHTML = `<div class=" card mb-3">
          <img
            src=${unicornio.img}
            class="unicorn-img"
            alt="..."
          />
          <div class="card-body">
            <h5 id="nombre-unicornio" class="card-title">${unicornio.name}</h5>
            <p id="desc" class="card-text">
              ${unicornio.power}
            </p>
        </div>`
    }catch(error){
        console.log(error);
    }
}
export default obtenerUnSoloUnicornio