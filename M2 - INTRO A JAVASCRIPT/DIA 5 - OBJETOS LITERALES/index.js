// function funcion1(letras) {
//     let letra = 'b'
//     this.letra = letras
//     letra = 'k'
//     function funcion2() {
//       letra = 'v'
//     }
//     funcion2()
//     console.log(this.letra);
// }

// let letra = 'P'
// funcion1('D');
// console.log(letra);


// const user = {
//   name : 'John',
//   lastname : 'Doe',
//   age:22,
//   id:123123,
//   gender : 'male'
// }
// const userName = user.name
// const lastName = user.lastname
// const age = user.age

// const {name,lastname, age}=user
// console.log(user); 

// console.log(name, lastname, age);

// const hombres = {
//   diego : 'diego',
//   pedro : 'pedro',
//   juan : 'juan'
// }

// const hombre = new Hombres('Juan', 22)

// let {diego, pedro, juan} = hombres

// console.log(diego);

const titulo = document.getElementById('titulo')
const cajas = document.getElementsByClassName('caja')
const arreglo = [1,2,3,4]

const cajasArreglo = [...cajas]

for(let i = 0 ; i < cajasArreglo.length ; i ++){
  cajas[i].innerHTML = 'caja ' + i
}

titulo.innerHTML = 'DOM'