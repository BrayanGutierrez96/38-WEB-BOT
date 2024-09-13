let numero1 = 5;
let numero2 = 5;
let total = 0;

//OPERADORES ARITMETICOS

//SUMA
total = numero1 + numero2;

//RESTA

total = numero1 - numero2;

//multiplicacion

total = numero1 * numero2;

//Division

total = numero1 / numero2;

//Residuo
total = numero1 % 3;

//Incremento

numero1 = numero1 + 1;

//Decremento

numero1--;

//Potencia
total = numero1 ** 2;

total = numero1 ** (numero2 + 2);
total = numero1 * ((numero1 + numero1) * (numero2 - numero1));

// Operadores comparacion

total = numero1 < numero2;
total = numero1 > numero2;
total = numero1 === numero2;
total = numero1 == numero2;
total = numero1 != numero2;
total = numero1 !== numero2;

//Operadores Logicos

// &&  = AND || =  OR

let numero3 = 5;
let numero4 = 3;

const nombre = "1231231231";
const email = "";
const password = "";
let genero = 1; //si queremos que sea hombre false
genero = 3; //si queremos que sea mujer TRUE

// const generoConvertido = genero.toLocaleLowerCase();
// console.log(generoConvertido);
// if (genero === 1) {
//   console.log("puedes ingresar al baño de hombres");
// } else if (genero === 2) {
//   console.log("puedes ingresar al baño de mujeres");
// } else {
//   console.log("entra al baño que quieras");
// }

// CREAR EL USUARIO
// if(nombre !== "" && email !=="" && password !=="" ){
//     console.log("si se dio la condicion");
// }else{
//     console.log("no se dio la condicion");
// }

//ACTUALIZAR USUARIO
// if(nombre !== "" || email !=="" || password !=="" ){
// console.log("si se dio la condicion");
// }else{
//     console.log("no se dio la condicion");
// }


//Si una persona tiene entre 15 años y 35 años ademas es de chile y es mujer, puede hacer lo siguiente:
//Ser jugadora, Ser masajista, Ser parte del equipo tecnico

//si una persona tiene la edad ademas es de chile pero no es mujer
//Ser masajista
//si una persona no tiene la edad pero es de chile pero no es mujer
//ser parte del equipo tecnico
//si una persona no tiene cumple con los anteriores requisitos
//no puedes ser parte del equipo



const datos = [{
  genero: "mujer",
  edad: 15,
  nacionalidad: "chilena",
},{
    genero: "jorge",
    edad: 35,
    nacionalidad: "chileno",
  }
]



// if (
//   datos.nacionalidad === "chileno" ||
//   datos.nacionalidad === "chilena"
// ) {
//   console.log("puedes ser parte del equipo tecnico");
//   if (datos.edad >= 15 && datos.edad <= 35) {
//     console.log("puedes ser parte tambien del equipo de masajes");
//     if (datos.genero === "mujer") {
//       console.log("Puedes ser jugadora de la seleccion");
//     }
//   }
// } else {
//   console.log("Lo sentimos no nos llames, te llamamos");
// }


//Bucles


const frutas = [ "manzana", "fresa", "coco", "uvas" ]

frutas.push("pera")

console.log(frutas[0], frutas[1], frutas[2], frutas[3],frutas[4]);






//Ejercicios de los estudiantes
// 1
// let sexo = "niño";
// if (sexo  == "mujer") {
//     console.log ("Usted es mujer, puede entrar al baño de mujeres")
// } else{
//     console.log ("Usted es hombre, puede entrar al baño de hombres")
// }

// 2
// let gender = undefined

// gender = null
// if(gender === "male"){
//     console.log("enviar al baño de Hombres")
// } else if (gender === "female") {
//     console.log("enviar al baño de Mujeres")
// } else {
//     console.log("enviar al baño no binaro")
// }

// 3
// let user = prompt("eres hombre o mujer?")
// console.log(user)
// if(user=="hombre"){
//     console.log("Baño de hombres")
// }else if(user=="mujer"){
//     console.log("baño de mujeres")
// }else{
//     console.log("genero no definido")
// }

// 4
// let persona = "no se"
// if (persona === "hombre"){
//     console.log("Esta persona ira al baño de hombres")
// }else{
//  console.log("Esta persona ira al baño de mujeres");
// }

// 5.
// let genero = prompt("ingrese su genero: ")

// if (genero == "hombre"){
//     console.log("baño de hombres")
// } else if(genero == "mujer"){
//     console.log("baño de mujeres")
// } else{
//     console.log("baño no encontrado")
// }

// 6.
// const msg = document.getElementById("msg")

// const sexo = prompt("Eres hombre o mujer? Elige 1 x hombre y 2 x mujer")

// if (sexo == 1 || sexo == "1") {
//     msg.innerHTML = "Usted es hombre asi que va al baño de hombres asi que ESCAPASTE"
// } else if (sexo == 2 || sexo == "2") {
//     msg.innerHTML = "Usted es mujer asi que va al baño de mujeres asi que ESCAPASTE"
// } else {
//     msg.innerHTML = "No hay un baño para ti pero aun asi escapaste"
// }
