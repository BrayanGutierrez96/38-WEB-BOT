// class Users {
//     constructor(nombre,id,funciones) {
//         this.nombre = nombre
//         this.id = id
//         this.funciones = funciones
//     }
// }
// class BasicUser extends Users {
//     constructor(nombre,id,funciones){
//         super(nombre,id,funciones)
//     }
//     crearUsusario() {
//         console.log(`Me llamo ${this.nombre} id ${this.id}`);
//     }
// }
// class Admin extends BasicUser {
//     constructor(nombre,id,funciones,adminId) {
//         super(nombre,id,funciones)
//         this.adminId = adminId
//     }
//     eliminarUsuario(usuarioABorrar,idABorrar) {
//         console.log(`Se ah elimindo el usuario ${usuarioABorrar} id ${idABorrar}`);
//     }
// }
// class SuperUsuario extends Admin {
//     constructor(nombre,id,funciones,adminId) {
//         super(nombre,id,funciones,adminId)
//     }
//     eliminarAdmin(adminABorrar,idAdminABorrar) {
//         console.log(`Se ah elimindo el admin ${adminABorrar} id ${idAdminABorrar}`)
//     }
//     cabiarSistema() {
//         console.log("Se ah alterado el Sistema");
//     }
// }


// const nuevoUsuarioBasico = new BasicUser("Brayan", 1234, "Cliente")
// nuevoUsuarioBasico.crearUsusario()

// const newAdmin = new Admin ("John", 1475, "Administrar la pagina", "1")
// newAdmin.eliminarUsuario("Brayan", 1234)

// const newSuperAdmin = new SuperUsuario("Jane", "159", "Soy el dueño de la pagina", "1")
// newSuperAdmin.cabiarSistema()
// // newAdmin.cabiarSistema()

class Productos {
    constructor(nombre,precio,categoria) {
        if (isNaN(parseInt(precio))) {
            return alert("ingrese un precio valido")
        }
        this.nombre = nombre
        this.precio = parseInt(precio)
        this.categoria = categoria
    }
    mostrarDetalles() {
        console.log(`El producto ${this.nombre} de la categoria ${this.categoria} cuesta ${this.precio}`);
    }
    aplicarDescueto() {
       
        console.log("Este producto tiene un descuento del " + 15 + "%");

    }
    usarDescuento(){
        let nuevoPrecio = this.precio - (this.precio*descuento)%100
        console.log("El precio con el descuento aplicado sera " + nuevoPrecio);
    }
}

class ProductoFisico extends Productos {
    constructor(nombre,precio,categoria,peso,dimensiones) {
        super(nombre,precio,categoria)
        if (isNaN(parseInt(peso))) {
            return alert("ingrese un peso valido")
        }
        this.peso = parseInt(peso)
        this.dimensiones = dimensiones
    }
    calcularEnvio() {
        console.log("Costara" + this.peso*5 + "$ el envio");
    }
    mostrarDetalles() {
        console.log(`El producto ${this.nombre} de la categoria ${this.categoria} cuesta ${this.precio}. Tambien pesa ${this.peso} y mide ${this.dimensiones}.`);
    }
}

class ProductoDigital extends Productos {
    constructor(nombre,precio,categoria,tamañoArchivo) {
        super(nombre,precio,categoria)
        if (isNaN(parseInt(tamañoArchivo))) {
            return alert("ingrese un tamaño de archivo valido")
        }
        this.tamañoArchivo = tamañoArchivo
    }
    mostrarTamañoArchivo() {
        console.log(`Este archivo pesa ${this.tamañoArchivo} MB.`);
    }
    aplicarLicencia(tipoLicencia) {
        console.log("Este archivo tiene una licencia " + tipoLicencia + ".");
    }
    mostrarDetalles() {
        console.log(`El producto ${this.nombre} de la categoria ${this.categoria} cuesta ${this.precio}. Este archivo pesa ${this.tamañoArchivo} MB.`);
    }
}

const productoFisico = new ProductoFisico("Camisa", 1000, "Ropa", 1)
const productoDigital = new ProductoDigital("Curso de Java", 2000, "Programacion", "2 gb")

productoFisico.mostrarDetalles()
productoFisico.calcularEnvio()
productoFisico.aplicarDescueto()

productoDigital.mostrarDetalles()
productoDigital.aplicarLicencia("Comercial")
productoDigital.mostrarTamañoArchivo()