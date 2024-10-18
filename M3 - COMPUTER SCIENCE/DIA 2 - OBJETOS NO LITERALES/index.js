//Metodos del localStorage
//Importante el localStorage solamente recibe parametros tipo string
// localStorage.setItem("nombres",JSON.stringify([{des:"Comprar pan",estado:"false"},{des:"Comprar pan",estado:"false"},{des:"Comprar pan",estado:"false"}])) //Pide 2 parametros los cuales son 2 strings, el primero es la llave y el segundo su valor
//  localStorage.getItem("nombres")//Me recibe solo un parametro que es la llave que queremos obtener su valor
// localStorage.removeItem("nombre")//Me recibe solo un parametro que es la llave que queremos eliminar
// localStorage.clear()//No me pide parametros, esto me formatea el localStorage

// JSON.stringify()
// JSON.parse()

// nombres: "pedro, pablo, juan, jose"

// const nombres = JSON.parse(localStorage.getItem("nombres"))

// nombres.forEach(element => {
//     console.log(element.estado);
// });

//PROGRAMACION ORIENTADA A OBJETOS POO
//Crear nuestra primera Clase de Javascript

class AlumnosDevf {
    #gustos
    constructor(nombre, edad, email, nacionalidad, gustos){
        this.nombre = nombre;
        this.edad = edad;
        this.email = email;
        this.nacionalidad = nacionalidad
        this.#gustos = gustos
    }
    getGustos(){
        return `mi mayor deseo es ${this.#gustos}`
    }
    setGustos(nuevoGusto){
        return this.#gustos = nuevoGusto
    }
     aprender(){
        return `${this.nombre} está aprendiendo JS`
    }

}

const pilar = new AlumnosDevf("Pilar", 21, "pilar@example.com", "Chilena", "Conocer paises")
const enzo = new AlumnosDevf("Enzo", 26, "grande@example.com", "Chileno", "Chocolate")



enzo.setGustos("Galletas")
// console.log(pilar.getGustos());
// console.log(enzo.getGustos());

//Creamos otra clase animal con sus metodos y argumentos
class Animal{
    constructor(raza, edad, nombre){
        this.nombre = nombre;
        this.raza = raza;
        this.edad = edad
    }
    correr(){
        return `soy ${this.nombre} y estoy corriendo`
    }
}

const perro = new Animal("galgo inglés marrón",2,"Ayudante de Santa")
// console.log(perro.raza);
// console.log(perro.correr());


//Objetos literales
const persona = {
  nombre: "Pedro",
  apellido: "Perez",
  edad: 23,
  saludar: function () {
   console.log(
      "Hola soy " +
        this.nombre +
        " " +
        this.apellido +
        " y tengo " +
        this.edad +
        " años"
    );
  },
};

//Objetos no literales
const personas = new Object()

personas.nombre = "Juan"
personas.apellido = "Mendez"
personas.edad = 28
personas.saludar = function(){console.log(`Hola soy ${this.nombre} ${this.apellido} y tengo ${this.edad}`);}

// personas.saludar()
// console.log(personas);

