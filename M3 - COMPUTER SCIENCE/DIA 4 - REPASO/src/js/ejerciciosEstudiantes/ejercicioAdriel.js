class Producto {
    constructor(nombre, precio, categoria) {
      if (typeof nombre !== "string" || nombre === "") {
        throw new Error("El nombre debe ser una cadena de texto.");
      }
      if (typeof precio !== "number" || isNaN(precio)) {
        throw new Error("El precio debe ser un número válido.");
      }
      if (typeof categoria !== "string" || categoria === "") {
        throw new Error("La categoría debe ser una cadena de texto.");
      }
  
      this.nombre = nombre;
      this.precio = precio;
      this.categoria = categoria;
    }
  
    mostrarDetalles() {
      console.log(
        `Nombre: ${this.nombre}, Precio: $${this.precio}, Categoría: ${this.categoria}`
      );
    }
  
    aplicarDescuento(descuento) {
      return this.precio - (this.precio * descuento) / 100;
    }
  }
  
  class ProductoFisico extends Producto {
    constructor(nombre, precio, categoria, peso, dimensiones) {
      super(nombre, precio, categoria);
      if (typeof peso !== "number" || isNaN(peso)) {
        throw new Error("El peso debe ser un número válido.");
      }
      if (typeof dimensiones !== "string" || dimensiones === "") {
        throw new Error("Las dimensiones deben ser una cadena de texto");
      }
  
      this.peso = peso;
      this.dimensiones = dimensiones;
    }
  
    calcularEnvio() {
      return `Costo de envío:  $${this.peso * 5}`
    }
  
    mostrarDetalles() {
      super.mostrarDetalles();
      console.log(`Peso: ${this.peso} kg, Dimensiones: ${this.dimensiones}`);
    }
  }
  
  class ProductoDigital extends Producto {
    constructor(nombre, precio, categoria, tamanioArchivo) {
      super(nombre, precio, categoria);
      if (typeof tamanioArchivo !== "number" || isNaN(tamanioArchivo)) {
        throw new Error("El tamaño del archivo debe ser un número válido.");
      }
  
      this.tamanioArchivo = tamanioArchivo;
    }
  
    mostrarTamanioArchivo() {
      console.log(`Tamaño del archivo: ${this.tamanioArchivo} MB`);
    }
  
    aplicarLicencia(tipoLicencia) {
      return `Licencia aplicada: ${tipoLicencia}`;
    }
  
    mostrarDetalles() {
      super.mostrarDetalles();
      console.log(`Tamaño del archivo: ${this.tamanioArchivo} MB`);
    }
  }
  
  const camiseta = new ProductoFisico(
    "Camiseta Node.js",
    20,
    "Ropa",
    0.5,
    "30x20x5 cm"
  );
  console.log("-------- Producto físico --------");
  console.log("Detalles:");
  camiseta.mostrarDetalles();
  console.log("Métodos:");
  console.log(camiseta.calcularEnvio());
  console.log(`Precio con descuento: $${camiseta.aplicarDescuento(10)}`);
  
  const curso = new ProductoDigital("Curso de Node.js", 50, "Educación", 2000);
  console.log("-------- Producto digital --------");
  console.log("Detalles:");
  curso.mostrarDetalles();
  console.log("Métodos:");
  curso.mostrarTamanioArchivo();
  console.log(curso.aplicarLicencia("Personal"));