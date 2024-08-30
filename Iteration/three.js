// for of 

const arr = [1,2,3,4,5,6]

//  in "for of"  loop we don't need to define length it knows on its own, that for how long it needs to run

for (const num of arr) {
    // console.log(num);
    
    
}


const greeting = "Hello World"

for (const greet of greeting) {
    // console.log(greet);
    
    
}


// Maps 

// Map stores data in key,value pair. It also remembers the order of insertion. And there is no duplicate value in maps

const map = new Map()

map.set("IN","India")
map.set("USA","United States of America")
map.set("SA", "South Africa")

for (const key of map) {
    // console.log(key);      // output:- [ 'IN', 'India' ]
                              //          [ 'USA', 'United States of America' ]
                             //           [ 'SA', 'South Africa' ]
}


// to print in key,value pair we actually do it another way

for (const [key,value] of map) {
    // console.log(`${key} ==> ${value}`);
    
    
}


//  We can't use "for of" on objets


const Myobject  = {
    game1:"GTA",
    game2:"Valorant"
}

// for (const game of Myobject) {
//     // console.log(game);      // Output :-  Myobject is not iterable
    
    
// }