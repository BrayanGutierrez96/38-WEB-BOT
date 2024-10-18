//Ejercicio Pilar
class Coche {
    constructor(marca, modelo, año){
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
     describirCoche(){
        return `la marca es ${this.marca}, modelo es ${this.modelo}, el año es ${this.año}`
     }
}
const coche1 = new Coche("hyundai", "tucson", "2000")
const coche2 = new Coche("toyota", "corolla", "2005")
// console.log(coche1.describirCoche())
// console.log(coche2.describirCoche())

//Ejercicio 2 Pilar

// class CuentaBancaria {
//     constructor(nombre, saldo) {
//         this.nombre = nombre;
//         this.saldo = saldo;
//     }
//     depositar(cantidad) {
//         this.saldo += cantidad;
//         return `El saldo actual de ${this.nombre} es ${this.saldo} después de depositar ${cantidad}`;
//     }
//     retirar(cantidad) {
//         if (cantidad > this.saldo) {
//             return `Saldo insuficiente. El saldo actual de ${this.nombre} es ${this.saldo}`;
//         }
//         this.saldo -= cantidad;
//         return `El saldo actual de ${this.nombre} es ${this.saldo} después de retirar ${cantidad}`;
//     }
//     consultar() {
//         return `El saldo actual de ${this.nombre} es ${this.saldo}`;
//     }
// }

// const persona1 = new CuentaBancaria("Brayan", 0);
// const persona2 = new CuentaBancaria("Pepito", 20000);

// console.log(persona1.consultar());
// console.log(persona1.depositar(1000));
// console.log(persona1.retirar(2000));

// console.log(persona2.consultar());
// console.log(persona2.depositar(2000));
// console.log(persona2.retirar(500));

//Ejercicio Enzo
class Autos {
    constructor(marca,modelo,año){
        this.marca = marca
        this.modelo = modelo
        this.año = año
    }
    describirCoche(){
        return `Este es un auto marca ${this.marca} y modelo ${this.modelo} del año ${this.año}`
    }
}
let elMejor = new Autos("Ferrari","Enzo","2002")
let elGrande = new Autos("Lamborghini", "Murcielago", "2010")

// console.log(elGrande);
// console.log(elMejor);
// console.log(elGrande.describirCoche());
// console.log(elMejor.describirCoche());

//Ejercico 2 Enzo
class Cuentas {
    constructor(titular,balance,credito,deuda){
        this.titular = titular
        this.balance = balance
        this.credito = credito
        this.deuda = deuda
    }
    depositar(deposito){
        let nuevoBalance = this.balance + deposito
        this.balance = nuevoBalance
    }
    retirar(retiro){
        if(this.balance < retiro){
            alert("No tienes suficiente saldo.")
        } else {
            let nuevoBalance = this.balance - retiro
            this.balance = nuevoBalance
        }
    }
    consultarBalance(){
        return this.balance
    }
    pedirPrestamo(prestamo){
        if(this.credito < prestamo){
            alert("No tienes suficente Credito.")
        } else {
            let nuevaDeuda = this.deuda + (prestamo * 1.15)
            let nuevoCredito = this.credito - prestamo
            let nuevoBalance = this.balance + prestamo
            this.credito = nuevoCredito
            this.balance = nuevoBalance
            this.deuda = nuevaDeuda

        }
    }
    consultarCredito(){
        return this.credito
    }
    consultarDeuda(){
        return this.deuda
    }
}

let cuenta1 = new Cuentas("Brayan", 120000,1000000,0)
let cuenta2 = new Cuentas("Julian", 25000, 500000,0)
cuenta1.pedirPrestamo(500000)
console.log(cuenta1.consultarDeuda());
cuenta1.pedirPrestamo(500000)
console.log(cuenta1.consultarDeuda());
cuenta1.pedirPrestamo(500000)
console.log(cuenta1.consultarCredito());
console.log(cuenta1.consultarBalance());
// cuenta1.retirar(120000)
// cuenta1.depositar(50000)
// console.log(cuenta2.credito);
// console.log(cuenta1.consultarBalance());



//Ejercicio Jose Pua
class Auto {
    constructor(marca, modelo, año) {
      this.marca = marca;
      this.modelo = modelo;
      this.año = año;
    }
  
    describirAuto() {
      return(`Este auto es un ${this.marca} ${this.modelo} del año ${this.año}.`);
    }
  }
  
const auto1 = new Auto("Toyota", "modelo1", 2013);
const auto2 = new Auto("Ford", "modelo2", 2008);
// console.log(auto1.describirAuto())
// console.log(auto2.describirAuto())

//Ejercicio 2 Ignacio Cordova
// class CuentaBancaria {
//     constructor(titular, saldoInicial) {
//         this.titular = titular;
//         this.saldo = saldoInicial;
//     }
//     depositar(cantidad) {
//         this.saldo += cantidad;
//     }
//     retirar(cantidad) {
//         if (cantidad > this.saldo) {
//         console.log("Fondos insuficientes");
//         return;
//         }
//         this.saldo -= cantidad;
//     }
//     consultarSaldo() {
//         return this.saldo;
//     }
//     }
// const cuenta = new CuentaBancaria("Juan Perez", 0);
// cuenta.depositar(500);
// console.log(cuenta.consultarSaldo());
// cuenta.retirar(200);
// console.log(cuenta.consultarSaldo());
// cuenta.retirar(2000); 
// console.log(cuenta.consultarSaldo());