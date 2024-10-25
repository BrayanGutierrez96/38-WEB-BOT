import ClasePadre from "./ClasePadre.js";

class ClaseHijo1 extends ClasePadre{
    constructor(nombre, id){
        super(nombre)
        this.id = id
    }
    mostrarId(){
        return `Mi ID es : ${this.id}`
    }
}

const hijo1 = new ClaseHijo1("John", 2)


console.log(hijo1.mostrarId());

export default hijo1