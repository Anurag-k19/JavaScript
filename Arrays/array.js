//Arrays


const arr = [1,2,3,4,5,6,7]

//Array methods


console.log(arr.length);  //7

arr.push(8)
console.log(arr);   //[1, 2, 3, 4, 5, 6, 7, 8]
arr.push(9)
console.log(arr);   //[1, 2, 3, 4, 5, 6, 7, 8, 9]

arr.pop()
console.log(arr);  //[1, 2, 3, 4, 5, 6, 7, 8]

console.log(arr.includes(8));  //true

console.log(arr.indexOf(4));  //3



// join function converts arr into a string data type

const newArr = arr.join()

console.log(arr);    //[1, 2, 3, 4, 5, 6, 7, 8]

console.log(newArr);    //1,2,3,4,5,6,7,8

console.log(typeof newArr);  //string

console.log('\n');

//slice and splice

// slice - it does not change the original array

// splice it manipulates the original array


console.log("Original Array :",arr);

let arrSlice = arr.slice(1,3)
console.log("Sliced Array : ",arrSlice);

console.log("After slice :",arr);

console.log('\n');

console.log("Original Array :",arr);

let arrSplice = arr.splice(1,3)
 
console.log("Spliced Array : ",arrSplice);
console.log("After splice :",arr);


