// this function refer to current context 

const user = {
    username :"Anurag",
    age:19,
    message : function (){
        console.log(this.username);

        // if we log this inside the object it prints the current context which is the object itself 

        // console.log(this);  //{ username: 'Anurag', age: 19, message: [Function: message] }
        
        

    }
}
// user.message()
// user.username="Amit"
// user.message()

// if we run this command outside the object in node environment it will give output as empty object

// console.log(this);  //   {}

// IMPORTANT -->   If we run this function in node environment it will print empty object  {}   but if we run this in browser it will give a Global Object called Window
 


// --------------------------------------------------------------- arrow function -------------------------------------------------------------


// if we print this in normal function it will give some global values 
// but if we try to use this to print some data it will give out undefined. It means that we cancot use this inside a function


function one(){
    usename : "Anurag"
    // console.log(this);
    // console.log(this.username);    // undefined
    
    
}
// one()



//  In arrow function if we run this it will return an empty object
// and if we try to use this to print some data it will give output as "undefined"


const two = () =>{
    username:"Anurag"
    // console.log(this);   // {}
    // console.log(this.usename);   // undefined
    
    
}
// two()



//  IMPLICIT RETURN AND EXPLICIT RETURN

// Implicit return --> In implicit return we do not write return and use curly braces "{}" we normally write in one line or use simple brackets "()" if we have to declare objects in arrow function

// Explicit return --> In explicit return we use return and use curly braces "{}" 

const explicit = (num1,num2)  => {
    return num1 + num2
}

// console.log(explicit(3,4));   // 7 


const implicit = (num1,num2) => num1 +num2

// console.log(implicit(3,4));    //7

const implicit1 = (num1,num2) => (num1+num2)

// console.log(implicit1(3,4));  // 7 


// we can pass object in implicit return 

const implicit2 = () => ({username:"Anurag"})

// console.log(implicit2());   // { username: 'Anurag' }

