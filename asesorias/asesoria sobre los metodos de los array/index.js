const arregloDeLetras = ["A", "B", "C", "D"];
const arregloDeNumeros = [15, 45, 123, 76, 12];
const arregloDeObjetos = [
  {
    name: "john",
    age: 23,
  },
  {
    name: "jane",
    age: 22,
  },
];

let nuevoArreglo = [];

arregloDeNumeros.forEach((element) => {
  if (element < 50) {
    nuevoArreglo.push(element);
    return;
  }
});

const neuvoArreglo3 = arregloDeNumeros.filter((numeros)=>{
    return numeros <50
})

const nuevoArreglo2 = arregloDeObjetos.map((usuario) => {
    const nuevaInformacion = {...usuario, apellido:"doe"}
    return nuevaInformacion
});

const foundNumber = arregloDeNumeros.find((numero)=>(numero === 12))

function mostrarNumero (){
    if(!foundNumber){
        console.log("Ese numero no existe");
        return
    }
     console.log(foundNumber);
}

mostrarNumero()


