class Producto{
    constructor(nombre, precio, categoria){
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }
    dettalles(){
        return `El producto ${this.nombre} es de la categoria ${this.categoria} y actualmente cuesta ${this.precio}$`
    }
    aplicarDescuento(porcentaje){
        let precioNuevo = parseInt(this.precio) - parseInt(this.precio) * (porcentaje/100)
        return `El producto con el descuento de ${porcentaje}% es de ${precioNuevo}$`
    }
}

class ProductoFisico extends Producto{
    constructor(nombre, precio, categoria, peso, dimensiones){
        super(nombre, precio, categoria)
        this.peso = peso;
        this.dimensiones = dimensiones;
    }
    calcularEnvio(){
        let precioEnvio = parseInt(this.peso) * 5;
        return `El precio del envio de tu producto es de: ${precioEnvio}$`
    }
    dettalles(){
        return `El producto ${this.nombre} es de la categoria ${this.categoria}, mide ${this.dimensiones} junto a un peso de ${this.peso}kg y actualmente cuesta ${this.precio}$`
    }
}

class ProductoDigital extends Producto{
    constructor(nombre, precio, categoria, tamañoArchivo){
        super(nombre, precio, categoria);
        this.tamañoArchivo = tamañoArchivo;
    }
    mostrarTamañoArchivo(){
        return `El archivo ${this.nombre} pesa ${this.tamañoArchivo}GB`
    }
    aplicarLicencia(tipoLicencia){
        return `Se ha aplicado ${tipoLicencia} a el producto ${this.nombre}`
    }
    dettalles(){
         return `El producto ${this.nombre} es de la categoria ${this.categoria}, pesa ${this.tamañoArchivo}GB y actualmente cuesta ${this.precio}$`
    }
}

const CamisetaNodeJS = new ProductoFisico("Camisa NodeJS", 30, "camisas", 40, "40x30x76");
const CursoNodeJS = new ProductoDigital("Curso NodeJS", 30, "cursos programacion", 1);


console.log(CamisetaNodeJS.dettalles());
console.log(CamisetaNodeJS.aplicarDescuento(35))
console.log(CamisetaNodeJS.calcularEnvio())

console.log(CursoNodeJS.dettalles())
console.log(CursoNodeJS.aplicarDescuento(50))
console.log(CursoNodeJS.aplicarLicencia("Personal"))