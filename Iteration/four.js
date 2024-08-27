//  for in loop


//  to iterate on Objects we use "for in" loop

const myObject ={
    js:"JavaScript",
    cpp:"C++",
    rb:"Ruby"

}

for (const key in myObject) {
    // console.log(key);       by this method we can print all the keys
    
   
}

// to print the object values we can use this syntax

for (const key in myObject) {
    // console.log(myObject[key]);
    
   
}


for (const key in myObject) {
    // console.log(`Key : ${key}  -- values : ${myObject[key]}`);
    
}


//  If we use for in loops on arrays we will get the index of the array

const arr = ["Apple","Mango","Banana"]

for (const key in arr) {
//    console.log(key);     // Output --> 0
                            //            1
                            //            2 
}


//  To print the values we can use same method as the object

for (const key in arr) {
    // console.log(arr[key]);   // This will print the values of the array
    
}



//  We can't use for in on maps 

const map = new Map()

map.set("IN","India")
map.set("USA","United States of America")
map.set("SA", "South Africa")

for (const key in map) {
    // console.log(key);     // Output it will give no Output
    
}