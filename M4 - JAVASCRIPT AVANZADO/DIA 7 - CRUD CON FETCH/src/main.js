import obtenerUnicornios from "./api/obtenerUnicornios.js";
const contenedor = document.querySelector("#contenedor")
const URL = "https://example-unicorns-api.vercel.app/unicornios";

obtenerUnicornios(contenedor, URL)