class producto {
    constructor(nombre, precio) {
        this.nombre = nombre
        this.precio = precio
    }


mostrarInformacion() {
    console.log(`Nombre: ${this.nombre}, Precio: $${this.precio}`);
    } 
}

class productoFisico extends producto {
    constructor(nombre, precio, peso, stock) {
        super(nombre, precio);
        this.peso = peso;
        this.stock = stock;
    }

    mostrarInformacion() {
        super.mostrarInformacion();
        console.log(`Peso: ${this.peso}kg, Stock: ${this.stock}`);
    }
    calcularenvio() {
        const costoEnvio = this.peso *10
        console.log(`Costo de envío: $${costoEnvio}`);
    }
}

class productoDigital extends producto {
    constructor(nombre, precio, tamanodelarchivo, licencia) {
        super(nombre, precio);
        this.tamanodelarchivo = tamanodelarchivo;
        this.licencia = licencia
    }

    mostrarInformacion() {
        super.mostrarInformacion();
        console.log(`Tamaño del archivo: ${this.tamanodelarchivo}MB, Licencia: ${this.licencia}`);
    }

    descargar() {
        console.log(`Descargando ${this.nombre} (${this.tamanodelarchivo}MB)`);
      }
}

const Mangareligioso = new productoFisico("el ataque de los tentaculos mojados 1 edicion", 10000, 1.2, 200) 
Mangareligioso.mostrarInformacion();
Mangareligioso.calcularenvio();

const Mangareligiosoonline = new productoDigital("el ataque de los tentaculos mojados online", 3000, 2, "permanete");
Mangareligiosoonline.mostrarInformacion();
Mangareligiosoonline.descargar();