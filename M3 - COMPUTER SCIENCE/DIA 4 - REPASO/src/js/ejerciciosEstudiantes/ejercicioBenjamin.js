class Producto{
    constructor(Nombre, Precio, Categoria) {
        this.Nombre = Nombre
        this.Precio = Precio
        this.Categoria = Categoria
    }
    MostrarDetalles(){
        return `Precio ${this.Precio} Nombre ${this.Nombre} Categoria ${this.Categoria}`
    }
    AplicarDescuento(Descuento){
        let ProductoConDescuento = this.Precio - Descuento
        return ProductoConDescuento
    }

}
class ProductoFisico extends Producto{
    constructor(Nombre, Precio, Categoria, Peso,Dimensiones ){
        super(Nombre, Precio, Categoria)
        this.Peso = Peso
        this.Dimensiones = Dimensiones
    }
    CalcularEnvio(){
  
        return `el costo de envio seria ${this.Peso * 5}`
    }
    MostrarDetalles(){
        return `Precio ${this.Precio} Nombre ${this.Nombre} Categoria ${this.Categoria} Peso ${this.Peso} Dimensiones ${this.Dimensiones}`
    }
}
class ProductoDigital extends Producto{
    constructor(Nombre, Precio, Categoria,TamanoArchivo ) {
        super(Nombre, Precio, Categoria)
        this.TamanoArchivo = TamanoArchivo
    }
    MostrarTamanoArchivo(){
        return `El tamano del archivo es ${this.TamanoArchivo}`
    }
    MostrarTipoDeLicencia(TipoLicencia){
        return`El tipo de licencia de este producto es ${TipoLicencia}`
    }
    MostrarDetalles(){
        return `Precio ${this.Precio} Nombre ${this.Nombre} Categoria ${this.Categoria} TamanoArchivo ${this.TamanoArchivo}`
    }
}
const Camisa = new ProductoFisico("Camisa", 231, "ropa", 8, 56)
const CursoJs = new ProductoDigital("Curso de Js", 200, "Progamacion", "3 Gb" )
console.log(Camisa.MostrarDetalles());
console.log(Camisa.CalcularEnvio());

console.log(CursoJs.MostrarTipoDeLicencia("comercial"));
console.log(CursoJs.MostrarTamanoArchivo());
console.log(CursoJs.MostrarDetalles());