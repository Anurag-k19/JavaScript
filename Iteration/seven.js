//maps 

numbers = [1,2,4,6,8,9]

// const nums = numbers.map((items)=>{
//     return items+10
// })

const items = numbers.map((num)=> num*10).map((num)=> num+1).filter((num)=> num>40)

// console.log(items);       // Output :-  [ 41, 61, 81, 91 ]


