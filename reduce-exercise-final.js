// reduce exercise 6    --    https://coursework.vschool.io/array-reduce-exercises/

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

// numYoungVotes:        // if (elem.age < 26 && elem.voted == true)
// numYoungPeople:       // if (elem.age < 26)
// numMidVotesPeople:    // if (elem.age > 29 && elem.age < 33 && elem.voted == true)
// numMidsPeople:        // if (elem.age > 29 && elem.age < 33)
// numOldVotesPeople:   // if (elem.age > 40 && elem.voted == true)
// numOldsPeople:       // if (elem.age > 40)

// allow me use my custom function into a let
// let numYoungVotes = voter => voter.age < 26 && voter.voted == true; 
// let numYoungPeople = voter => voter.age < 26;
// let numMidVotesPeople = voter => voter.age > 29 && voter.age < 33 && voter.voted == true; 
// let numMidsPeople = voter => voter.age > 29 && voter.age < 33;
// let numOldVotesPeople = voter => voter.age > 40 && voter.voted == true;
// let numOldsPeople = voter => voter.age > 40;


// my object, I'll be using like second param into reduce()   
const initialState = { 
  numYoungVotes: 0,        // if (elem.age < 26 && elem.voted == true)
  numYoungPeople: 0,         // if (elem.age < 26)
  numMidVotesPeople: 0,      // if (elem.age > 29 && elem.age < 33 && elem.voted == true)
  numMidsPeople: 0,          // if (elem.age > 29 && elem.age < 33)
  numOldVotesPeople: 0,      // if (elem.age > 40 && elem.voted == true)
  numOldsPeople: 0           // if (elem.age > 40)
}

function voterResults(arr) {
  return arr.reduce((acc, { age, voted }) => {
    if (age >= 18 && age <= 25) {
      return { ...acc, 
        numYoungPeople: acc.numYoungPeople + 1,
        ...(voted ? {numYoungVotes: acc.numYoungVotes + 1} : {}),
      };
    }

    if (age >= 26 && age <= 35) {
      return { ...acc, 
        numMidsPeople: acc.numMidsPeople + 1,
        ...(voted ? {numMidVotesPeople: acc.numMidVotesPeople + 1} : {}),
      };
    }

    return { ...acc, 
      numOldsPeople: acc.numOldsPeople + 1,
      ...(voted ? {numOldVotesPeople: acc.numOldVotesPeople + 1} : {}),
    };
  }, initialState)
};
console.log('Election results: ', voterResults(voters));
