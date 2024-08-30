const coding = ["js","ruby","python"]

// we cannot return values in forEach we can only print and use values in javaScript

const values = coding.forEach((items)=>{
    // console.log(items);
    // return items
    
})

// console.log(values);           // it will return undefined


// That's why we use filter and map functions


// filter function is similar to forEach function but in filter we give a condition and it checks it
// the main difference is that filter return an value 

const val = [1,2,3,4,5,6,7,8,9]

const newVal =val.filter((num)=>{
    // return num>4
})

// console.log(newVal);

// if we want to do this using forEach loop we need to create another array

const newNums = []

val.forEach((items)=>{
    if(items>4){
        newNums.push(items)
    }
})
// console.log(newNums);



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);