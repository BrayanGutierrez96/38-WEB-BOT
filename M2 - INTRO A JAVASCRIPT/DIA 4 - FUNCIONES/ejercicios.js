// 1. Contar Números Impares entre Dos Valores
// Crea una función llamada contarImpares que reciba dos números y devuelva la cantidad de números impares que hay entre ellos, incluidos los extremos si son impares.

// const numero1 = 1;
// const numero2 = 100;

// function contarImpares(num1,num2){
//     let contador = 0
//     let indice = num1
//     for(indice; indice < num2; indice ++){
//         if(indice %2 != 0){
//             contador = contador + 1
//         }
//     }
//     return "Hay " + contador + " de numeros impares entre el "+ num1 + " y " + num2
// }

// console.log(contarImpares(numero1, numero2));

// 2. Encontrar el Número Menor en un Arreglo
// Escribe una función llamada menorNumero que reciba un arreglo de números y devuelva el menor de ellos

const array  = [2,1,3,4,5,6]

function menorNumero(arreglo){
    let comparador = arreglo[0]
    for(let i = 0; i < arreglo.length; i++){
        if (comparador > arreglo[i]){
            comparador = arreglo[i]
        }
    }
    return `El numero menor es ${comparador}`
}

console.log(menorNumero(array));

//Solcion estudiantes
//#1
// function contarNumerosImpares(numero1, numero2){
//     for (let i = numero1; i <= numero2; i++) {
//         if( i % 2!=0 ){
//             console.log(i+"es un numero impar")
//         }
//     }
// }
// contarNumerosImpares(1,10)

//#2
// function contarImpares(num1, num2) {
//     let cantidad = 0;
//     num1 = parseInt(num1);
//     num2 = parseInt(num2);
//     if (num1 > num2) {
//       cantidad = (num1 - num2) / 2;
//     } else if (num2 > num1) {
//       cantidad = (num2 - num1) / 2;
//     }
//     if (
//       (num1 % 2 === 1 && num2 % 2 === 0) ||
//       (num1 % 2 === 0 && num2 % 2 === 1)
//     ) {
//       cantidad++;
//     }
//     return parseInt(cantidad);
//   }
//   console.log(contarImpares(1, 100));

//#3
// let inicio = 0;
// let fin =  0;
// let contador = 0;
// function contarImpares(inicio, fin) {
//     //verifica si inicio>fin y revierte si es necesario
//     if (inicio > fin) {
//         [inicio, fin] = [fin, inicio];
//     }
//     //verifica impar
//     for (let i = inicio; i <= fin; i++) {
//         if (i % 2 !== 0) {
//             contador++;
//         }
//     }
//     console.log(`La cantidad de números impares entre ${inicio} y ${fin} es: ${contador}`);
//     return contador;
// }
// contarImpares(-3,15)

//#4
// let numeros = []
// function contarImpares (n1,n2) {
//     let n = n1
//     for(n; n<=n2;n++){
//         if (n % 2 !== 0) {
//             numeros.push(n)
//         }
//     }
// }
// contarImpares(1,9)
// console.log(numeros.length);

//#5
// function contarNumerosImpares(numero1, numero2){
//     let cantidadDeNumerosImpares= 0
//     for (numero1; numero1 <= numero2; numero1++) {
//         if( numero1 % 2!=0 ){
//             console.log(numero1+"es un numero impar")
//             cantidadDeNumerosImpares++
//         }

//     }
//     return "La cantidad de numeros impares es " +cantidadDeNumerosImpares
// }
// console.log(contarNumerosImpares(-5,2))

//#6
// function contarImpares(n1, n2){
//     let impares = [];
//     if(n1<n2){
//         for(n1; n1<=n2; n1++){
//             if(n1%2 == 1 || n1%2 ==-1){
//                 impares.push(n1);
//             }
//         }
//     }else{
//         for(n2; n2<=n1; n2++){
//             if(n2%2 == 1 || n2%2 ==-1){
//                 impares.push(n2);
//             }
//         }
//     }
//     return impares;
// }

// let numero1 = 15;
// let numero2 = 1;

// console.log("hay: " + contarImpares(numero1, numero2).length + " numeros impares entre: " + numero1 + " y " + numero2 + " que son: " + contarImpares(numero1, numero2) );

// Ejercicio 2
//#1

// function encontrarMenor(numeros) {
//   let menor = numeros[0];
//   for (let i = 1; i < numeros.length; i++) {
//     if (menor > numeros[i]) {
//       menor = numeros[i];
//     }
//   }
//   return menor;
// }
// console.log(encontrarMenor([6, 235, 238, 328, 1295, 12387, 12, 1324, 12, 2, -124, -125, -346,]));

//#2
// let array = [2, 6, 9283 , 394883092,  -15, 593]

// function menorNumero(numeros){
//     let numeroMenor = numeros[0];
//     for(let i = 0; i<=numeros.length; i++){
//         if(numeros[i] < numeroMenor){
//             numeroMenor = numeros[i]
//         }
//     }
//     return numeroMenor;
// }


// console.log("el numero menor de todo el arreglo (" + array + ") es: " + menorNumero(array));