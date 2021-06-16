// ---------------   Hola Mundo   -------------------
// ---------------------------------------------------------------------------------------------------------------


const reducer = (acumulador, valorActual) => nuevoAcumulador
// valorActual = elemento que se esta iterando, acumulador va tomando el valor de nuevoAcumulador en las siguientes iteraciones 

const reducido = [].reduce((acc, el) => acc + el, 0)
// 0 es el valor inicial del acumulador

const reducido2 = [1, 2].reduce((acc, el) => acc + el, 0)
console.log(reducido2);   // [0 + 1]    =>    [1 + 2]    =>   3



const numbers = [1, 2, 3, 4, 5];

const pets = [
  { name: "ozzy", age: 10, type: 'dog' },
  { name: 'Tomas', age: 7, type: 'cat' },
  { name: 'Murdock', age: 13, type: 'dog' },
  { name: 'Happy', age: 4, type: 'cat' },
];



const resultado = numbers.reduce((acc, el) => acc + el, 0)
console.log(resultado);   // [0 + 1]    =>    [1 + 2]    =>   [3 + 3]    =>    [6 + 4]    =>    [10 + 5]    =>   15


const indexed = pets.reduce((acc, el) => ({ ...acc, [el.name]: el }), {});
console.log(indexed);
// {
//   ozzy: { name: 'ozzy', age: 10, type: 'dog' },
//   Tomas: { name: 'Tomas', age: 7, type: 'cat' },
//   Murdock: { name: 'Murdock', age: 13, type: 'dog' },
//   Happy: { name: 'Happy', age: 4, type: 'cat' }
// }
console.log(indexed['ozzy']);
// { name: 'ozzy', age: 10, type: 'dog' }


// queremos que el arreglo sea plano
const anidado = [1, [2, 3], 4, [5]];
const plano = anidado.reduce((acc, el) => acc.concat(el), []);
console.log(plano);// []    =>    [1]    =>    [1, 2, 3]    =>    [1, 2, 3, 4]    =>    [1, 2, 3, 4, 5]\


// ---------------   La Cocina del codigo   -------------------
// ---------------------------------------------------------------------------------------------------------------

const numeros = [3, 10, 20, 50];

// recibe un array, primer parametro es una fumcion reductora, 
// el segundo parametro es valor incial del acumulador en nuestro caso '0', (es opcional)...  
// ... si no lo definimos tomara el primer elemnto como valor inicial en nuestro caso '3'
let reducirEsto = arr.reduce(() => {}, 0)
// los parametros que recibe nuestra funcion acumuladora
let reducirEsto = arr.reduce((acumulador, numero, posicion, numeros) => {}, 0)

let total = numeros.reduce((acumulador, numero) => acumulador + numero, 0)
// podemos separar el codigo
const acumular = (acumulador, numero) => acumulador + numero;
let total = numeros.reduce(acumular, 0);


// podemos hacer lo que hace map(), con reduce()
// funcion para mostrar el valor doble
const acumularDobles = (acumulador, numero) => [ ...acumulador, numero * 2];
const dobles = numeros.reduce(acumularDobles);