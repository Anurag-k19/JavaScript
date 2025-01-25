const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);     

// we can't change the value of a constant set in js Because it's properties is set as
/*{
    value: 3.141592653589793, 
    writable: false,                       // value of PI is not writable 
    enumerable: false,                     // value of PI is not enumerable
    configurable: false                    // value of PI is not configurable
  } 
    */
  


const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));    // to know th properties of our object which is set as true

Object.defineProperty(chai, 'name', {                  // This is how we cant change the property by calling Object.defineProperty(objectName,'key',{writable:true/false, enumerable: true/false, configurable:true/false})
    //writable: false,
    enumerable: false,
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {             // enumerable is set as false so we cant't iterate that key of that object that is set as enumerable
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}