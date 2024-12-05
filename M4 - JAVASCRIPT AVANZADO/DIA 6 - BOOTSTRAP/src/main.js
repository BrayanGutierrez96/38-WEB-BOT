// import axios from "axios";
const URL = "https://example-unicorns-api.vercel.app/unicornios";
const nombreUnicornio = document.querySelector("#nombre-unicornio");
const description = document.querySelector("#desc");

// axios.get(URL).then((res)=>{console.log(res);})

async function obtenerUnicornios() {
  const res = await fetch(URL);
  const unicorniosDB = await res.json();
  const unicornios = unicorniosDB.map((unicornio) => {
    return {
      nombre: unicornio.name,
      power: unicornio.power,
      age: unicornio.age,
      imagen: unicornio.img,
    };
  });

  console.log(unicornios);
}
obtenerUnicornios();
