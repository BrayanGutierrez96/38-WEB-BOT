import axios from "axios";
const URL = "https://example-unicorns-api.vercel.app/unicornios";
const id = "6749036f75b49079275d8709";
const data = {
  name: "Chile",
  power: "Saltar",
  img: "imagen",
  age: 2,
};
//Crear unicornios
// axios.post(URL, data).then((res) => {
//   console.log(res);
// });

//Obtener unicornios
// axios.get(URL).then((res) => {
//   console.log(res.data);
// });

//elimar unicornio
// axios.delete(`${URL}/${id}`).then((res)=>{console.log(res);})

async function obtenerUnicornio() {
    const res = await axios.get(URL)
    console.log(res.data);
}
obtenerUnicornio()