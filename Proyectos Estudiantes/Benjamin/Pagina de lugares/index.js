const datos = [
  {
    Titulo: "Brazil",
    Imagen:
      "https://img.freepik.com/foto-gratis/hermosa-vista-playa-mar_181624-6029.jpg?t=st=1728576949~exp=1728580549~hmac=80aeda181a35284e661a97e46bcf22d46cc8648e0af437e3e1852e1bef96b837&w=1060",
    Descripcion:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum corrupti mollitia laborum sed iusto perferendis ea ducimus quitempore necessitatibus quibusdam tempora dolorem ullam dolores,accusantium eos earum nobis dolorum. Lorem ipsum dolor sit ametconsectetur adipisicing elit. Laudantium porro distinctiocorporis, nulla debitis fugit. Vitae reiciendis ipsa mollitiaquasi, asperiores qui placeat quibusdam possimus cumque id illumipsam nisi?",
  },
  {
    Titulo: "Portugal",
    Imagen:
      "https://img.freepik.com/foto-gratis/vista-hermoso-arco-iris-que-aparece-al-final-carretera_23-2151562946.jpg?t=st=1728576494~exp=1728580094~hmac=47547678ac1cc01b5d21ad2b4236cf7b1e3575a0554e403de54cf18bf7b411e8&w=360",
    Descripcion:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum corrupti mollitia laborum sed iusto perferendis ea ducimus quitempore necessitatibus quibusdam tempora dolorem ullam dolores,accusantium eos earum nobis dolorum. Lorem ipsum dolor sit ametconsectetur adipisicing elit. Laudantium porro distinctiocorporis, nulla debitis fugit. Vitae reiciendis ipsa mollitiaquasi, asperiores qui placeat quibusdam possimus cumque id illumipsam nisi?",
  },
  {
    Titulo: "Mexico",
    Imagen:
      "https://img.freepik.com/foto-gratis/casa-mexicana-colores_23-2151769268.jpg?t=st=1728577048~exp=1728580648~hmac=20c6487b3fca8e990de7362ace7baff1571c062bb4ff2c10b1b2d63f759a9389&w=1380",
    Descripcion:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum corrupti mollitia laborum sed iusto perferendis ea ducimus quitempore necessitatibus quibusdam tempora dolorem ullam dolores,accusantium eos earum nobis dolorum. Lorem ipsum dolor sit ametconsectetur adipisicing elit. Laudantium porro distinctiocorporis, nulla debitis fugit. Vitae reiciendis ipsa mollitiaquasi, asperiores qui placeat quibusdam possimus cumque id illumipsam nisi?",
  },
];
const ContenedorPirncipalCardsPaises = document.querySelector(
  "#ContenedorPirncipalCardsPaises"
);



for (let i = 0; i < datos.length; i++) {
  ContenedorPirncipalCardsPaises.innerHTML += `        <div class="card-contenedor">
          <img
            class="img-card"
            src=${datos[i].Imagen}
            alt=""
          />
          <div class="contenido-card">
            <h3 class="titulo-card">${datos[i].Titulo}</h3>
            <p class="descripcion-card">
            ${datos[i].Descripcion}
            </p>
          </div>
          <div class="btns-card">
            <button class="btn btn-visit">Visit place</button>
            <button class="btn btn-favorites">Add To Favorites</button>
          </div>
        </div>`;
}
const ModalDePaises = document.querySelector("#ModalInfoPais");
let botoncerrar = document.querySelector("#cerrar-modal");
let botonVisitPlace = document.querySelectorAll(".btn-visit");


for(let i = 0; i <botonVisitPlace.length; i++){
  botonVisitPlace[i].onclick = abrirModal
}

function abrirModal() {
  ModalDePaises.style.display = "flex";
}

function CerrarModal() {
  ModalDePaises.style.display = "none";
}


botoncerrar.onclick=CerrarModal
botonVisitPlace.onclick=abrirModal
