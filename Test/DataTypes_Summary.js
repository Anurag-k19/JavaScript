// there are two types of datatypes in js
//    1 --> Primitive 
//    2 --> Non Primitive or Reference type


// _Return type of variables in JavaScript
// 1) Primitive Datatypes
         const number = 100;
//        Number => number
         const string = "Anurag"
//        String  => string
         const isLoggedIn = true
//        Boolean  => boolean
        const temperature = null
//        null  => object
        let value;
//        undefined  =>  undefined
        const id = Symbol("123")
//        Symbol  =>  symbol
       const bigNumber = 3334647586586979696n
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes (reference DataType)

         const Names =["Anurag","kunal","aniket"]
//        Arrays  =>  object

         const myFunction = function(){
            console.log("Hello World");
         }
//        Function  =>  function
    
          let myObj = {
            name: "Anurag",
            marks: 87
          }
//        Object  =>  object

console.log(myObj);