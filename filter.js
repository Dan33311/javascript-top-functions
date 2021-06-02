// Ejercicio
function fiveAndGreaterOnly(arr) {
  // your code here
}
// test
// console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]



// Mi intento no logrado (segun forma ejercicio)
function fiveAndGreaterOnly(arr) {
  return arr.filter(n => n < 6)
}
// test
// console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// undefined



// // Mi intento logrado, pero no cumple la forma del ejercicio
// function fiveAndGreaterOnly(arr) {
//   arrFiltered = arr.filter(n => n == 6 || n == 8)
// }
// // test
// fiveAndGreaterOnly([3, 6, 8, 2])
// console.log(arrFiltered); /// [6, 8]

const mascotas = [
  { name: 'ozzy', age: 10, typo: 'dog'},
  { name: 'tomas', age: 7, typo: 'cat'},
  { name: 'murdok', age: 13, typo: 'dog'},
  { name: 'happy', age: 5, typo: 'cat'},
]

const ozzy = mascotas.filter(mascota => mascota.name == 'ozzy')
//console.log(ozzy)


// classic function
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

function filtrarMenoresQue100 (numeros) {

  const menoresQue100 = [];

  for ( let i = 0; i < numeros.length; i++) {
    if(numeros[i] < 11) {
      menoresQue100.push(numeros[i])
    }
  }
  return menoresQue100
}

console.log(filtrarMenoresQue100(numeros));