class Dispositivo {
    constructor(marca, modelo, tipoDeCable){
        this.marca = marca,
        this.modelo = modelo
        this.tipoDeCable = tipoDeCable
    }
    mostrarDetalles(){
        return `Dispositivo de la marca ${this.marca} modelo ${this.modelo}`
    }
}

class Tableta extends Dispositivo {
    constructor(marca, modelo, tamanoPantalla){
        super(marca, modelo)
        this.tamanoPantalla = tamanoPantalla
    }
}

const tableta1 = new Tableta("Samsung", "A8", '10"')


console.log(tableta1.mostrarDetalles());
