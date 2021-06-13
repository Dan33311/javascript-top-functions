// https://coursework.vschool.io/array-map-exercises/


// 1) Make an array of numbers that are doubles of the first array
function doubleNumbers(arr){
  return arr.map(number => number * 2);
}
console.log("Respuesta 1: ",doubleNumbers([2, 5, 100])); // [4, 10, 200]


// 2) Take an array of numbers and make them strings
function stringItUp(arr){
  return arr.map(number => number.toString())
}
console.log("Respuesta 2: ",stringItUp([2, 5, 100])); // ["2", "5", "100"]


// 3) Capitalize each of an array of names
function capitalizeNames(arr){
  return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase())
}
console.log("Respuesta 3: ",capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
// ["John", "Jacob", "Jingleheimer", "Schmidt"]


// 4) Make an array of strings of the names
function namesOnly(arr){
  // return arr.map(person => person.name) // comun, but the next line is better
  return arr.map(({name}) => name)
}
console.log("Respuesta 4: ",namesOnly([{ name: "Angelina Jolie", age: 80 }, { name: "Eric Jones", age: 2 },
{ name: "Paris Hilton", age: 5 }, { name: "Kayne West", age: 16 }, { name: "Bob Ziroll", age: 100 }])); 
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]


// 5) Make an array of strings of the names saying whether or not they can go to The Matrix
function makeStrings(arr){
  return arr.map(({name, age}) => {
    // age < 18 ? `${name} can go to The Matrix` : `${name} is under age !!`
    if (age > 18) return `${name} can go to The Matrix`
    if (age < 18) return `${name} is under age !!`
  })
}
console.log("Respuesta 5: ", makeStrings([{ name: "Angelina Jolie", age: 80 }, { name: "Eric Jones", age: 2 },
{ name: "Paris Hilton", age: 5 }, { name: "Kayne West", age: 16 }, { name: "Bob Ziroll", age: 100 }])); 
// ["Angelina Jolie can go to The Matrix", 
// "Eric Jones is under age!!", 
// "Paris Hilton is under age!!", 
// "Kayne West is under age!!", 
// "Bob Ziroll can go to The Matrix"]


const nombre = "jessica";

console.log(nombre.split().reverse());