// ---------------   Hola Mundo   -------------------
// ---------------------------------------------------------------------------------------------------------------
const numbers = [1, 2, 3, 4, 5, 6];

const pets = [
  { name: "ozzy", age: 10, type: 'dog' },
  { name: 'Tomas', age: 7, type: 'cat' },
  { name: 'Murdock', age: 13, type: 'dog' },
  { name: 'Happy', age: 4, type: 'cat' },
];

const products = [
  { id: "gjlb56io34", name: 't-shirt', price: 50 },
  { id: 'dgyf8689hu', name: 'tennis', price: 200 },
  { id: 'dhyro52f44', name: 'pants', price: 100 },
];


// multiplica por 2
const multiplicados = numbers.map(number => number * 2);
console.log('multiplicados:', multiplicados); // multiplicados: [ 2, 4, 6, 8, 10, 12 ]
// split code (multiplica por 2)
const multiplicar = number => number * 2;
const numerosMultiplicados = numbers.map(multiplicar);
console.log('numerosMultiplicados: ', numerosMultiplicados); // numerosMultiplicados:  [ 2, 4, 6, 8, 10, 12 ]

// pares
const pares = numbers.map(number => [number, number]);
console.log('pares: ', pares); // pares:  [ [ 1, 1 ], [ 2, 2 ], [ 3, 3 ], [ 4, 4 ], [ 5, 5 ], [ 6, 6 ] ]

// valores de una llave (extraer datos de un objeto "La Cocina del codigo")
const edades = pets.map(pet => pet.age);
// better way to write the before code
const ages = pets.map(({ age }) => age);
// console.log(ages);


// Funcion para crear descuento en productos que cumplan la condicion "La Cocina del codigo"
// En esta funcion va a aplicar el descuento a los productos que cuesten mas de 100
const productosConDescuento = products.map(function (product) {
  if (product.price < 100) return product;

  return { ...product, price: product.price * 0.9 };
});
console.log(productosConDescuento); // [ { id: 'gjlb56io34', name: 't-shirt', price: 50 }, 
// { id: 'dgyf8689hu', name: 'tennis', price: 180 }, { id: 'dhyro52f44', name: 'pants', price: 90 } ]


