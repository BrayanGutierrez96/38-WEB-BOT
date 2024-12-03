//FETCH ---> ME PERMITE HACER PETICIONES CON JS
const URL = "https://example-unicorns-api.vercel.app/unicornios";

//#1 METODO GET ---> OBTENER DATOS DE UNA API

fetch(URL)
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    console.log(res);
  }); //--> FETCH INICIA POR DEFECTO EN METODO GET "this"

// #2 METODO POST ---> CREAR DATOS EN UNA API
const data = { name: "SKY3", power: "FLY", img: "z" }
fetch(URL, {
  method: "POST",
  headers:{  "Content-Type": "application/json"},
  body: JSON.stringify(data),
}).then((res)=>{return res});

