//Bucles for
//el for es una serie de ejecuciones que dependen de una condicion
//El for se va a ejecutar mientras que se cumpla la condicion y hasta que se cumpla la condicion

//Ejemplo 1
const frutas = ["Manzana", "uva", "pera"];
let indice = 0;

for (indice; indice < 3; indice = indice + 1) {
  console.log("Fruta: " + frutas[indice]);
}

//Ejemplo 2
let numeros = [3, 7, 5];

    let total = 0;
for (let i = 0; i < numeros.length; i++) {
  total = total + numeros[i];
}
console.log("El total es: " + total);

// Ejercicio 1: Números pares del 1 al 20
// Escribe un programa que imprima todos los números pares entre 1 y 20 utilizando un bucle for y una condicional.

for (let i = 1; i <= 20; i = i + 1) {
  if (i % 2 === 0) {
    console.log("Numero par: " + i);
  }
}

//Ejercicio 2: Sumar los primeros N números
//Escribe un programa que calcule la suma de los primeros N números naturales. El valor de N se debe especificar dentro del código.

const n = 10;
let total3 = 0
for (let i = 0; i <= n; i++) {
    total3 = total3 + i 
}
console.log("el total es: "+total3);


//Ejercicio 3: Contar números mayores a 10 en un arreglo
// Dado un arreglo de números, escribe un programa que cuente cuántos de esos números son mayores que 10.

let contador = 0
let arreglo = [4,20,11,54,1,0,99,12,11,10,100,5]

for(let i = 0; i < arreglo.length; i++){
    if(arreglo[i] > 10){
        contador ++
    }
}
console.log(contador+" numeros son mayores que 10");


// Arreglo:
// let listaTareas = ["Comprar Desayuno", "Ir a trabajar", "Estar en clases"]

const DB = [{},{},{}]
Objeto:
const perfil = {
    email:"jonh@example.com",
    arreglo:[{nombre:"Jane"},"asdfas","sadff"],
    objeto:{
        nombre2:"sadfas",
        asdfas:"Asdfasd",
        asdfasd:"asdfas"
    },
    nombre:"john",
    apellido:"Doe",
    edad:22,
}

//-------INDICE DE UN LIBRO ------------

// contenido Principal ------------ pág. 12
// informción importante----------- pág. 14
// datos curiosos ----------------- pág. 20
// Referencias -------------------- pág. 24



//Ejercicios de los estudiantes

//Ejercicio 1

// N 1
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0 && i <= 10) {
//         console.log(i + " es par y menor o igual a 10");
//     } else if (i % 2 === 0 || i > 15) {
//         console.log(i + " es par o mayor que 15");
//     }
// }

// N 2
// let i = 0;
// for(i; i<=20; i++){
//     if(i%2 == 0){
//         console.log(i);
//     }
// }

// N 3
// for(let i = 1; i <= 20; i++){
//     if (i % 2 == 0){
//         console.log(i);
//     }
// }

//N 4 
// let num = 0
// if(num==20) {
//     console.log("Condicional terminada")
// } else if (num <= 20) {
//     for(num; num <= 20; num += 2) {
//         console.log(num)
//     }
// }

// N 5
// let numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// let numerosIndex = 0
// for (numerosIndex; numerosIndex<numeros.length; numerosIndex++) {
//  if (numeros[numerosIndex] % 2 === 0){
//     console.log(numeros[numerosIndex]);
//  }
// }

//N 6
// let NumerosPares=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

// for(let i = 1; i <= NumerosPares.length ; i++){
//     if( i % 2==0 ){
//         console.log(i)
//     }
// }

//Ejercicio 2

// N 1
// let suma = 0;
// let numeroLimite = 20; //Este es el modificable
// for (let i = 1 ; i <= numeroLimite; i++){
//     suma = suma + i;
// }
// console.log(suma);

//N 2
// let numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
// let total = 0;
// let totalAntiguo = 0;
// for(let i=0; i < numeros.length; i++){
//     totalAntiguo= total;
//     total = total + numeros[i];
//     console.log("Total de suma:" + totalAntiguo + " + " + numeros[i] + " = " + total);
// }


//N 3 
// const N = 10;

// function sumaNaturales(n) {
//     let suma = 0;
//     for (let i = 1; i <= n; i++) {
//         suma += i;
//         console.log(suma);
//     }
//     return suma;
// }

// const resultado = sumaNaturales(N);
// console.log(`La suma de los primeros ${N} números naturales es: ${resultado}`);

//N 4

// const N= 10;
// console.log("N esta en"+ " "+ N)
// let suma = 0
// for(let i = 0; i<=N;i++){
//     suma = suma + i
// }
// console.log (suma)

//N 5
// let total = 0
// let n = 10
// for (let i = 0; i <= n; i++) {
//     total+= i
//     console.log(total);
// }

// const n = 10
// let total = 0

// for(let i = 0; i <= n; i++){
//     total = total + i
// }
// console.log(total);

//Ejercicio 3

//N 1
// let numeros = [7, 3, 10, 45, 849, 0, 4, 9, 30, 40, 50];
// let cantidadMayor = 0;
// for(let i = 0; i<numeros.length; i++){
//     if(numeros[i]>10){
//         cantidadMayor++
//     }
// }
// console.log(cantidadMayor);

//N 2
// let arreglo = [4,20,11,54,1,0,99,12,11,10,100,50]
// console.log("Existen " + contarMayoresQue10(arreglo) + " numero(s) mayores que 10 en el arreglo");
// function contarMayoresQue10(arreglo){
//     let contador = 0;
//     for (let i = 0; i < arreglo.length; i++){
//         if(arreglo[i] > 10){
//             contador++;
//         }
//     }
//     return contador;
// }

//N 3
// let aboveten = 0
// let arreglo = [4,20,11,54,1,0,99,12,11,10,100,5]
// for(let i = 0; i < arreglo.length; i++) {
//     if (arreglo[i] > 10) {
//         aboveten ++
//     }
// }
// console.log("Hay " + aboveten + " mayores a 10")

//N4
// let arreglo = [4, 20, 11, 54, 1, 0, 99, 12, 11, 10, 100, 5];
// let cantidad = 0;
// for (let i = 0; i < arreglo.length; i++) {
//     if (arreglo[i] > 10) {
//         cantidad++;
//     }
// }
// console.log(`Hay ${cantidad} números mayores que 10 en el arreglo.`);

//N5

// let arreglo = [4,20,11,54,1,0,99,12,11,10,100,50]
// for (i=0;i<arreglo.length; i++){
//     if(10 < arreglo[i]){
//         console.log(arreglo[i] + " "+ "es mayor que 10")
//     }
// }

//N6
// const arreglo = [4, 20, 11, 54, 1, 0, 99, 12, 11, 10, 100, 5];
// function contarMayores(arreglo) {
//   let contador = 0;
//   for (let i = 0; i < arreglo.length; i++) {
//     if (arreglo[i] > 10) {
//       contador++;
//     }
//   }
//   return contador;
// }
// console.log("La cantidad de números mayores a 10 es " + contarMayores(arreglo));

//N 7 
// let arreglo = [4,20,11,54,1,0,99,12,11,10,100,5]
// let mayoresQueDiez = []
// for (let i=0; i <= arreglo.length; i++) {
//     if (arreglo[i] > 10) {
//         mayoresQueDiez.push (arreglo[i])}
// }
// console.log(mayoresQueDiez);