//  Scopes in JavaScript


 var  c = 300   // output will be 50

 let a = 500  // output will be 500 as a=30 can only be accessed in the "if" block


if (true) {


    let a = 30
    const b = 40
    var c = 50


}
// console.log(a);  // let will not give output out of the scope 
// console.log(b);  // const also will not give output out of the scope
console.log(c);     // But var can give output out of the scope


// output will be 50 Because 50 later than 300 in the scope