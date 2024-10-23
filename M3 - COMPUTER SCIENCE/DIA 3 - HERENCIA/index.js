//Repaso de lo que son los objetos no literales

// const objeto0 = { nombre: "Johnrs", array: [], objeto3: { llave2: "valor" } }; // Objeto literal
// const objeto2 = 12344;

// const objeto4 = new Object(); //Objeto no literal

// const nuevoObjeto = { ...objeto0, apellido : "Gomez" };

// function mostrarObjeto() {
//     if(nuevoObjeto.nombre.length>5){
//         nuevoObjeto.apellido = "Gomez"
//     } else{nuevoObjeto.apellido = "Ramirez"}
// }

// mostrarObjeto();
// console.log(nuevoObjeto);

// class Animales {
//   constructor(color, nombre, tamano, peso, edad) {
//     if(isNaN(parseInt(edad))){
//         console.log("Edad debe de ser un numero");
//         return
//     }
//     this.color = color;
//     this.nombre = nombre;
//     this.tamano = tamano;
//     this.peso = peso;
//     this.edad = edad;
//   }
//   vivir(){
//     return `mi nombre es ${this.nombre} y estoy viviendo`
//   }
//   morir(){}
//   maullar(){
//     return `Estoy maullando`
//   }
// }

// const gato = new Animales("Cafe", "Misifus", "10", "5", "sadfgasf");






class SeresVivos{
    constructor(edad, tamano, habitat, nombre){
        this.edad = edad;
        this.tamano = tamano;
        this.habitat = habitat;
        this.nombre = nombre
    }
    vivir(){
       return `He vivido ${this.edad} años`
    }
    morir(dia, anio, mes){
        return `Mori el dia ${dia} de ${mes} del año ${anio}`
    }
}

class Fauna extends SeresVivos {
    constructor(edad, tamano, nombre, habitat, patas){
        super(edad, tamano,nombre, habitat)
        this.patas = patas
    }
    metodoDeDesplazamiento(desplazamiento){
        return `me de desplazo ${desplazamiento}`
    }

}

class Humanos extends Fauna {
    constructor(edad, tamano, habitat, nombre, patas, religion, lengua){
        super(edad, tamano, habitat, nombre, patas)
        this.religion = religion
        this.lengua = lengua
    }
    pensar(pensamiento){
        return `Estoy pensando en ${pensamiento}`
    }
}

class Animales extends Fauna {
    constructor(edad, tamano, habitat, nombre, patas, pelaje, especie){
        super(edad, tamano, habitat, nombre, patas)
        this.pelaje = pelaje;
        this.especie = especie
    }
    hibernar(tiempo){
        return `Estoy hibernando ${tiempo} meses`
    }

}

class Flora extends SeresVivos{
    constructor(edad, tamano, habitat, nombre, cantidadRamas){
        super(edad,tamano,habitat, nombre)
        this.cantidadRamas = cantidadRamas
    }
}





const persona1 = new Humanos(28, "1,68", "Ciudad", "Brayan", 2, "Prefiero no decirlo", "Espanol")
const arbol1 = new Flora(95, "2,50", "selva", "brayancarionte", 48, "Prefiero no decirlo", "Espanol")
console.log(persona1.vivir());
console.log(arbol1.vivir());


// Super usuario --> Cambiar configuraciones del sistema
// Administrador --> Eliminar Usuarios
// Usuario --> Crear un nuevo usuario, actualizar sus datos

// Orden 1 usuario          superclase
// Orden 2 admin            subclase
// Orden 3 superUsuario     sub-subclase

// Super clase o clase padre viene siendo el usuario