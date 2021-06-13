// ---------------   Hola Mundo   -------------------
// ---------------------------------------------------------------------------------------------------------------
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

const mascotas = [
  { name: 'ozzy', age: 10, typo: 'dog'},
  { name: 'tomas', age: 7, typo: 'cat'},
  { name: 'murdok', age: 13, typo: 'dog'},
  { name: 'happy', age: 5, typo: 'cat'},
]


// filter method
const cats = mascotas.filter(mascota => mascota.typo === 'cat')

// we can split the code in order to do more clear the code
const sonGatos = mascota => mascota.typo === 'cat';
const gatos = mascotas.filter(sonGatos);


// classic function
function filtrarMenoresQue10 (numeros) {
  const menoresQue10 = [];
  for ( let i = 0; i < numeros.length; i++) {
    if(numeros[i] < 11) {
      menoresQue10.push(numeros[i])
    }
  }
  return menoresQue10
}
filtrarMenoresQue10(numeros);

// short version with filter
const menoresQueDiez = numeros.filter(n => n < 10);

