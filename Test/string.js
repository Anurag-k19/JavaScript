let newString = "This is string class"
let regex = "!@#$%^&*()"
//  differnt string functions

// to UpperCase

let newString2=newString.toUpperCase();   //THIS IS STRING CLASS
console.log(newString2);                  
let newString3 = newString.toLowerCase();   //this is string class
console.log(newString3);
let newString4=newString.charAt(3)          // s
console.log(newString4);
let newString5=newString.indexOf('n')       // 12
console.log(newString5);
let newString6=newString.replace("class","lecture")    //This is string lecture
console.log(newString6);

let newString7=newString.length;                    // 20
console.log(newString7);
let newString8=newString.search(regex);
console.log(newString8);



let newString9=newString.slice(0,4)           // This
console.log(newString9);
let newString10=newString.split(" ")          // [ 'This', 'is', 'string', 'class' ]
console.log(newString10);

let newString1 = "       This is string class           "        
let newString11=newString1.trim();             // This is string class
console.log(newString11);