//  for each loop


const coding = ["Js","cpp","java","python"]

// in "forEach" we pass a callBackFunction
// A callBackFunction is a function in which we do not assign it a name as you can see it in the "forEach " loop

// The forEach each iterate through every element and each element is passed in function as argument and then we can use the values as we want

coding.forEach(function (item){
    // console.log(item);
    
})

// We can also use a arrow function 

coding.forEach( (items) => {
    // console.log(items); 
    
})


//  we can also create function first and then give refrence in the forEach

function languages(items){
    // console.log(items);     it will print the elements of array
}

coding.forEach(languages)


//  forEach not only print items it also prints index and the array itself

coding.forEach( function (items,index,arr){
    // console.log(items,index,arr);
    
})

// Output of above code

// Js 0 [ 'Js', 'cpp', 'java', 'python' ]
// cpp 1 [ 'Js', 'cpp', 'java', 'python' ]
// java 2 [ 'Js', 'cpp', 'java', 'python' ]
// python 3 [ 'Js', 'cpp', 'java', 'python' ]



// We can use forEach on array of objects

const myArray =[
    {
        language : "Js",
        languageFileNAme : "js"
    },
    {
        language : "C++",
        languageFileNAme : "cpp"
    },
    {
        language : "Java",
        languageFileNAme : "java"
    }
]

myArray.forEach( function(items){
    console.log(items.language);
    console.log(items.languageFileNAme);
    
    
})