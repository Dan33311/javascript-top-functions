// https://coursework.vschool.io/array-reduce-exercises/


// 1) Turn an array of numbers into a total of all the numbers
function total(arr) {
  return arr.reduce((acc, el) => acc + el)
}
console.log("Respuesta 1: ", total([1,2,3])); // 6


// 2) Turn an array of numbers into a long string of all those numbers.
function stringConcat(arr) {
  return arr.reduce((acc, el) => `${acc}${el}`) 
}
console.log("Respuesta 2: ", stringConcat([1,2,3]), ""); // "123"


// 3) Turn an array of voter objects into a count of how many people voted.
// !Note: You don't necessarily have to use reduce for this, so try to think of multiple ways you could solve this.
function totalVotes(arr) {
  let newArr = arr.map(({ voted }) => {
    // voted == true ? `uno` : `no`
    if (voted == true) return 1;
    if (voted == false) return 0;
  })
  return newArr.reduce((acc, num) => acc + num)    
}
var voters = [
   {name:'Bob' , age: 30, voted: true},
   {name:'Jake' , age: 32, voted: true},
   {name:'Kate' , age: 25, voted: false},
   {name:'Sam' , age: 20, voted: false},
   {name:'Phil' , age: 21, voted: true},
   {name:'Ed' , age:55, voted:true},
   {name:'Tami' , age: 54, voted:true},
   {name: 'Mary', age: 31, voted: false},
   {name: 'Becky', age: 43, voted: false},
   {name: 'Joey', age: 41, voted: true},
   {name: 'Jeff', age: 30, voted: true},
   {name: 'Zack', age: 19, voted: false}
];
console.log("Respuesta 3: ", totalVotes(voters)); // 7


// 4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
function shoppingSpree(arr) {
  return arr.reduce((acc, el) => acc + el.price, 0)    
}
var wishlist = [
   { title: "Tesla Model S", price: 90000 },
   { title: "4 carat diamond ring", price: 45000 },
   { title: "Fancy hacky Sack", price: 5 },
   { title: "Gold fidgit spinner", price: 2000 },
   { title: "A second Tesla Model S", price: 90000 }
];
console.log("Respuesta 4: ", shoppingSpree(wishlist)); // 227005


// 5) Given an array of arrays, flatten them into a single.
// !Note: Take a look at Array.concat() to help with this one
function flatten(arr) {
  return arr.reduce((acc, el) => acc.concat(el), [])    
}
var arrays = [["1", "2", "3"], [true], [4, 5, 6]];
console.log("Respuesta 5: ", flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];


// 6) Given an array of potential voters, return an object representing the results of the vote.
var voters = [
  {name:'Bob' , age: 30, voted: true},              // middle age < 33 age > 29
  {name:'Jake' , age: 32, voted: true},             // middle
  {name:'Kate' , age: 25, voted: false}, // young
  {name:'Sam' , age: 20, voted: false},  // young age < 26
  {name:'Phil' , age: 21, voted: true},  // young
  {name:'Ed' , age:55, voted:true},                            // old
  {name:'Tami' , age: 54, voted:true},                         // old
  {name: 'Mary', age: 31, voted: false},            // middle
  {name: 'Becky', age: 43, voted: false},                      // old
  {name: 'Joey', age: 41, voted: true},                        // old age > 40
  {name: 'Jeff', age: 30, voted: true},             // middle
  {name: 'Zack', age: 19, voted: false}  // young
];
function voterResults(arr) {
  return arr.reduce((acc, elem) => (
    // console.log(acc), 
    { ...acc, [elem.voted]: (acc[elem.voted] || 0) + 1 }
  ), {})
}
console.log("Respuesta 6: ", voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,        // if (elem.age < 26 && elem.voted == true)
numYoungPeople: 4,         // if (elem.age < 26)
numMidVotesPeople: 3,      // if (elem.age > 29 && elem.age < 33 && elem.voted == true)
numMidsPeople: 4,          // if (elem.age > 29 && elem.age < 33)
numOldVotesPeople: 3,      // if (elem.age > 40 && elem.voted == true)
numOldsPeople: 4           // if (elem.age > 40)
}  
*/


// count ocurrences  ---  https://www.youtube.com/watch?v=NiLUGy1Mh4U (15:00)
// function voterResults(arr) {
//   return arr.reduce((acc, elem) => (
      // console.log(acc), 

//     { ...acc, [elem.voted]: (acc[elem.voted] || 0) + 1 }
//   ), {})
// }
// console.log("Respuesta 6: ", voterResults(voters))
// // Respuesta 6:  { true: 7, false: 5 }