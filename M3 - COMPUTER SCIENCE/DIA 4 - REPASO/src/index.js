import data from "./data.js";
import hijo1 from "./js/clases/ClaseHijo1.js";

for(let i = 0 ; i < data.length ; i++){
   console.log(data[i].name);
}

data.forEach(function (pokemon) {
  console.log(pokemon.name);
});




















// class Dispositivo {
//     constructor(marca, modelo, tipoDeCable){
//         if(typeof marca ==='number'){
//             console.log("Solo recibo string");
//             return
//         }
//         this.marca = marca,
//         this.modelo = modelo
//         this.tipoDeCable = tipoDeCable
//     }
//     mostrarDetalles(){
//         return `Dispositivo de la marca ${this.marca} modelo ${this.modelo}`
//     }
// }

// class Tableta extends Dispositivo {
//     constructor(marca, modelo, tamanoPantalla){
//         super(marca, modelo)
//         this.tamanoPantalla = tamanoPantalla
//     }
// }

// const tableta1 = new Tableta(3, "A8", '10"')

// console.log(tableta1.mostrarDetalles());
