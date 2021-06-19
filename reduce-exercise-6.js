// reduce exercise 6

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

// let numYoungVotes = voter => voter.age < 26 && voter.voted == true; 
// let numYoungPeople = voter => voter.age < 26;
// let numMidVotesPeople = voter => voter.age > 29 && voter.age < 33 && voter.voted == true; 
// let numMidsPeople = voter => voter.age > 29 && voter.age < 33;
// let numOldVotesPeople = voter => voter.age > 40 && voter.voted == true;
// let numOldsPeople = voter => voter.age > 40;

const initialState = { 
  numYoungVotes: 1,        // if (elem.age < 26 && elem.voted == true)
  numYoungPeople: 4,         // if (elem.age < 26)
  numMidVotesPeople: 3,      // if (elem.age > 29 && elem.age < 33 && elem.voted == true)
  numMidsPeople: 4,          // if (elem.age > 29 && elem.age < 33)
  numOldVotesPeople: 3,      // if (elem.age > 40 && elem.voted == true)
  numOldsPeople: 4           // if (elem.age > 40)
}

function voterResults1(arr) {

  return voters.reduce((acc, voter) => {
    //const menoresDeEdad = numYoungPeople(voter);
    if (numYoungPeople(voter) == true){
      console.log(voter.name);
      console.log(acc);
      //voto = voter.name;
      acc.push(voter.name);
      //return acc;
    }
    return acc;
  }, [])
};
//console.log("Respuesta 6: ", voterResults1(voters));
//W// Respuesta 6:  [ 'Kate', 'Sam', 'Phil', 'Zack' ]
// Este codigo funciona, ahora quiero que me imprima el length del array ...


function voterResults2(arr) {

  return voters.reduce((acc, voter) => {
  
    if (numYoungPeople(voter) == true) {
      console.log(voter.voted);
      console.log(acc);
      //return voter.voted = 1 + acc;  // Work
      return acc + 1;
      //return {numYoungPeople: voter.voted = 1 + acc}`;
      //voto = voter.name;
      //voter.voted + acc;
      //return acc;
    }
    return acc;
  }, 0)
};
//console.log("Respuesta funcion 2: ", voterResults2(voters)); // 4
// Este codigo funciona, me suma el total de personas menores de 26 años



// intentando guardar el resultado anterior dentro de un objeto con el KEY que me piden
function voterResults3(arr) {

  return voters.reduce((acc, voter) => {
  
    if (numYoungPeople(voter) == true) {
      console.log(voter.voted);
      console.log(acc);
      return acc + 1;
      //voter.voted = 1 + acc;
      //return { numYoungPeople: acc };
      //return {numYoungPeople: voter.voted = 1 + acc}`;
      //voto = voter.name;
      //voter.voted + acc;
      //return acc;
    }
    return acc;
  }, { numYoungPeople: 0 })
};
//console.log("Respuesta funcion 3: ", voterResults3(voters));




