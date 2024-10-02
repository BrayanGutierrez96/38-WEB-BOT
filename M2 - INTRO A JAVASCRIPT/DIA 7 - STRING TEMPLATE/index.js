//Se crea una variable con datos como podrian llegarnos desde la BD
const datos = [
  {
    titulo: "Chile",
    imagen:
      "https://img.freepik.com/foto-gratis/paisaje-niebla-matutina-montanas-globos-aerostaticos-al-amanecer_335224-794.jpg?t=st=1727815999~exp=1727819599~hmac=6c98b55e765330698123b3222e6a9b8ada37d4a93095e10d9056ac9dd92ba83e&w=1380",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga maiores obcaecati blanditiis qui quas nihil nisi praesentium labore cupiditate? recusandae pariatur, id nam illo modi, quos incidunt quo autem recusandae pariatur, id nam illo modi, quos incidunt quo autem",
  },
  {
    titulo: "Colombia",
    imagen:
      "https://img.freepik.com/foto-gratis/disparo-gran-angular-solo-arbol-que-crece-cielo-nublado-puesta-sol-rodeada-cesped_181624-22807.jpg?t=st=1727816525~exp=1727820125~hmac=eedb6f8bc5dc38f8ea70cc7d04dfbf791033a13ddc7d3e27d8b724e245034315&w=1380",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga maiores obcaecati blanditiis qui quas nihil nisi praesentium labore cupiditate? recusandae pariatur, id nam illo modi, quos incidunt quo autem recusandae pariatur, id nam illo modi, quos incidunt quo autem",
  },
  {
    titulo: "Brazil",
    imagen:
      "https://img.freepik.com/foto-gratis/puente-madera-isla-koh-nangyuan-surat-thani-tailandia_335224-1082.jpg?t=st=1727823259~exp=1727826859~hmac=d363b9f872d624cc671e862a9a17990dade5e40a78292c4116100f66208ceca1&w=1380",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga maiores obcaecati blanditiis qui quas nihil nisi praesentium labore cupiditate? recusandae pariatur, id nam illo modi, quos incidunt quo autem recusandae pariatur, id nam illo modi, quos incidunt quo autem",
  },
  {
    titulo: "Mexico",
    imagen:
      "https://img.freepik.com/foto-gratis/hermoso-camino-madera-que-impresionantes-arboles-coloridos-bosque_181624-5840.jpg?t=st=1727816549~exp=1727820149~hmac=70373bba091a6f8a3284b422c961bb532992ed2ba7f67c166d400863e0755fe3&w=1380",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga maiores obcaecati blanditiis qui quas nihil nisi praesentium labore cupiditate? recusandae pariatur, id nam illo modi, quos incidunt quo autem recusandae pariatur, id nam illo modi, quos incidunt quo autem",
  },
];
//Se captura la etiqueta "root" desde el html con el querySelector y su id
const root = document.querySelector("#root");
//Se inicializa una variable en vacio para ir concatenando cada elemento nuevo
let htmlActual = "";

//Se recorre el elemento ROOT del html para ir pintado cada card
for (let i = 0; i < datos.length; i++) {
  htmlActual =
    htmlActual +
    `<div class="card">
    <h2 class="card__title">${datos[i].titulo}</h2>
    <div class="card__img">
      <img
        src=${datos[i].imagen}
        alt=""
        class="img"
      />
    </div>
    <div class="card__text">
      <p>
        ${datos[i].desc}
      </p>
      <button class="card__btn">Agregar a favoritos</button>
    </div>
  </div>`;
}
//Se sobreescribe la variable "root" que recordemos que es el que me va a renderizar todo mi html
//con lo que obtuvo el htmlActual
root.innerHTML = htmlActual;

const btns = document.querySelectorAll(".card__btn");

//Primera y mejor manera de capturar el titulo
for (let index = 0; index < btns.length; index++) {
  btns[index].onclick = function (evento) {
    alert(`${datos[index].titulo} agregada a favoritos`);
    console.log(evento.target);
  };
}

//Segunda manera de capturar el titulo
// const tituloCard = document.querySelectorAll(".card__title")
// for(let index = 0; index < btns.length; index ++ ){
//     btns[index].onclick = function(){alert(`${tituloCard[index].textContent} agregada a favoritos`);}
// }
