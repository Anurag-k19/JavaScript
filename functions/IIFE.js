// Immediately Invoked Function Expressions IIFE 

// IIFE is used to invoke or run an function immediately after declaring it

// The main reason we use IIFE  is we do not want our data to getb polluted by the values of global scope




//To create IIFE we need to put brackets immediately at the end of function declration and also we need to put our function in brackets too "()"


// Named IIFE

// In named IIFE we name the function
(function one(){
    console.log("One");
    
})();

// We can make arrow function as IIFE too

//While making two IIFE we need to end first one by a semicolon(;)

((name,age)=>{
    console.log(`${name} Age ${age}`);
    
})("Anurag",19)