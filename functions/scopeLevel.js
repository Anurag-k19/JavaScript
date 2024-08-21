//  we can create nested function in JavaScript


function one(){
    const username = "Anurag"

    function two(){
        const website = "Github"
        console.log(username);
        
    }
    // console.log(website);      // we cannot print variable outside of its scope. website was out of the scope of functino two()
    two()                          // it didm't get called because therer was a error present in the above line
                                  // Output will be "Anurag" Because child function can access the variables of parent function
}

// one()


// ------------------------------------------------example 2------------------------------------------------------


if(true){
    const username = "anurag"

    if(username === "anurag"){
        const surname = "kumar"
        // console.log(username + " " + surname);
        
    }
    // console.log(surname);   // we can't print surname because it is out of the inner if block
    

}

// console.log(username);   // we can't print username because it is out of the if block




// ------------------------------------------------------ mini hoisting -----------------------------------------------------------

// console.log(addone(5))  // a normal function can also be called before its initialization  output = 6

function addone(num){
    return num+1
}

// console.log(addone(5))    // Output = 6




//  we can also declare a function by creating it as s variable

// console.log(addTwo(5))   // But if we create functino as a variable we cannot call it before initialization unlike normal function where we can call it before initialization


const addTwo = function(num1){
    return num1 + 2
}

// console.log(addTwo(5))  // Output = 7