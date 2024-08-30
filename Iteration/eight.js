// Reduce in JavaScript


const arr = [1,2,3,4,5]

const nums = arr.reduce((acc,currVal)=> acc+currVal,0)

// console.log(nums);    // output :- 15



const nums1 = arr.reduce((acc,currVal)=> {
    // console.log(`accumulator ${acc} and CurrentValue ${currVal}`);
    
     return acc+currVal
},0)

// console.log(nums1);  

// Output :-

// accumulator 0 and CurrentValue 1
// accumulator 1 and CurrentValue 2
// accumulator 3 and CurrentValue 3
// accumulator 6 and CurrentValue 4
// accumulator 10 and CurrentValue 5
// 15



// Shopping Cart

const cart = [

    {
        CourseName : "js",
        price : 2999
    },
    {
        CourseName : "java",
        price : 1999
    },
    {
        CourseName : "Python",
        price : 999
    },
    {
        CourseName : "C++",
        price : 4999
    }
    
]


const Course_price = cart.reduce((acc,items)=>(acc + items.price),0)


console.log(`Course Price = ${Course_price}`);
