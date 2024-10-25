class Producto {
    constructor(nombre, precio, categoria){
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }
    mostrarDetalles(){
        return `el nombre es ${this.nombre}, el precio es $ ${this.precio} y la categoria es ${this.categoria}`
    }
    aplicarDescuento(descuento){
        return `el descuento es ${descuento}%, el precio es $ ${this.precio}, valor final con descuento es $ ${this.precio - (this.precio * (descuento / 100))}`
    }
}

class ProductoFisico extends Producto{
    constructor(nombre, precio, categoria, peso, dimensiones ){
        super(nombre, precio, categoria)
        this.peso = peso;
        this.dimensiones = dimensiones;
    }
    calcularEnvio(){
        return `el costo de envío es $ ${this.peso * 5}`
    }
    mostrarDetalles(){
        return `${super.mostrarDetalles()}, el peso es ${this.peso} kg y las dimensiones son ${this.dimensiones}`
    }
}

class ProductoDigital extends Producto {
    constructor(nombre, precio, categoria, tamanioArchivo){
        super(nombre, precio, categoria)
        this.tamanioArchivo = tamanioArchivo;
    }
    mostrarTamanioArchivo(){
        return `el tamaño del archivo es ${this.tamanioArchivo} MB`
    }
    aplicarLicencia(tipoLicencia){
        return `la licencia aplicada es ${tipoLicencia}`
    }
    mostrarDetalles(){
        return `${super.mostrarDetalles()}, el tamaño del archivo es ${this.tamanioArchivo} MB`
    }
 }

 const productoFisico = new ProductoFisico ("Camiseta Node.js", 2000, "Ropa", 20, "200x10x30cm")

 console.log(productoFisico)

 console.log(productoFisico.mostrarDetalles())
 console.log(productoFisico.calcularEnvio())
 console.log(productoFisico.aplicarDescuento(50))


console.log("-------------------------------")

 const productoDigital = new ProductoDigital("curso de Node.js", 1000, "Curso", "500" )

 console.log(productoDigital)

 console.log( productoDigital.mostrarDetalles())
 console.log(productoDigital.aplicarDescuento(50))
 console.log(productoDigital.aplicarLicencia("gratuita"))