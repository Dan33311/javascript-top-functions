// some exercises   ---  https://www.youtube.com/watch?v=MWWkSc_9cmY

// ----  exercise 1   ------------------------------------------------------------------------------

// reducelo (Reto adaptado):
// Escribe una funcion dirReduce que tome un arreglo de strings
// y retorne un arreglo de strings solo con las direcciones necesarias.
// recuerda las direcciones se eliminan: W<->E, S<->N y viceversa

// Examples (Casos de prueba):
// ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"] -> ["WEST"]
// ["NORTH", "SOUTH", "WEST", "EAST"] -> []

function dirReduce(arr) {
  const dirCounter = arr.reduce((accum, direction) => {
    accum[`${direction}`]++;
    return accum;
  }, { NORTH: 0, SOUTH: 0, WEST: 0, EAST: 0 })
  //return dirCounter;
  return objectDirToArray(dirCounter)
}

function objectDirToArray(dirCounter) {
  const x = dirCounter["EAST"] - dirCounter["WEST"]
  const y = dirCounter["NORTH"] - dirCounter["SOUTH"]

  xArray = Array(Math.abs(x)).fill(x > 0 ? "EAST" : "WEST") // manejo de numeros negativos
  yArray = Array(Math.abs(y)).fill(y > 0 ? "NORTH" : "SOUTH")

  return xArray.concat(yArray)
}
console.log(dirReduce(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])); 


// ------------------------------------------------------------------------------------------------
// what I had learn (preparation for exercise 2)

const str = "im-ready fOr learNiNg react this week";


// -- 2 -- to array and more
let lowerWords =  str
  .split(' ')    //  to split a string into an array of substrings
  // first char to Upper case, second and next char in a word to lower case
  .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
  .join('')  // returns the array as a string. (('') remove white spaces)


// replace()
// -- 3 -- remove white spaces from a string
// faster method
let result = str.split(' ').join('')
// work, but only whith the first validation (word)
let result2 = str.replace(' ', ''); // X "imready for learning react this week"
// \s = (white space), g = (global(apply for all string words)) 
let result3 = str.replace(/\s/g, ''); // W "imreadyforlearningreactthisweek"


console.log(lowerWords);
//console.log(result);
//console.log(result2);
//console.log(result3);


// ----  exercise 2   ------------------------------------------------------------------------------

// Pascalize (Reto adaptado):
// Construye un metodo que convierta un string de cualquier formato a PascalCase

// Examples (Casos de prueba): 
// "hey jude" --> "HeyJude"
// "i-liKe-javaSCRIPT" --> "ILikeJavascript"
// "software DEveloPment IS my pAsSiOn" --> "SoftwareDevelopmentIsMyPassion"

function pascalize(words) {
  const pascalFormat = words.match(/[a-zA-Z]+/g) //[ 'hey', 'jude' ] me descarta los simbolos (no match)
  .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()) // first char to Upper case, second and next char in a word to lower case
  .join('')
  console.log(pascalFormat);
  return pascalFormat
}

pascalize("i-liKe-javaSCRIPT")