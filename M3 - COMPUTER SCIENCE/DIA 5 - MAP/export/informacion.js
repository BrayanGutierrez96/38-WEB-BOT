import {productos, miFuncion} from "./data/productos.js"


productos.forEach(function(producto){
    console.log(producto.nombre);
})

console.log(miFuncion());

//1.Expotar los elementos que quiero exportar (export, export default, export{})
//2.Verificar que el archivo html este configurado como module (type="module")
//3.importar los elementos tal cual los exporte en otro archivo(import{} from"ruta", import nombreArchivo from "ruta")