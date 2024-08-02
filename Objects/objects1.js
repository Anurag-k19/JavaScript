// const newObject = new Object()   //it is a Singleton Object

// const newObject1 ={}            // it is a Non Singleton Object


// console.log(newObject);       // output - {}
// console.log(newObject1);     // output - {}



//  Objects inside a object ( nested objects)

const Obj = {
    id : "Anurag@gmail.com",
    Fullname : {
        UserName :{
            FirstName : "Anurag",
            LAstName : "Kumar"
        }

    }
}
// console.log(Obj);    //{ id: 'Anurag@gmail.com',Fullname: { UserName: { FirstName: 'Anurag', LAstName: 'Kumar' } }}
 
// console.log(Obj.Fullname.UserName.FirstName);   //Anurag

const obj1 ={ 1:'a', 2:'b'}
const obj2 = {1: 'c', 2:'d'}

// const obj3 = { obj1, obj2}  //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '1': 'c', '2': 'd' } }

// const obj3 = Object.assign({},obj1,obj2)   // { '1': 'c', '2': 'd' }



// or we can use spread method 

// const obj3 = {...obj1,...obj2}  // { '1': 'c', '2': 'd' }


//  to check if an instance preent in an Object or not we use "hasOwnProperty method"



const Obj1 = {
    id :"Anurag@gmail.com",
    Fullname : "Anurag Kumar",
    age: 19,
    isLoggedin :"false"
}


console.log(Obj1.hasOwnProperty("Fullname"));  //true

console.log(Object.keys(Obj1));   //[ 'id', 'Fullname', 'age', 'isLoggedin' ]

console.log(Object.values(Obj1));  //[ 'Anurag@gmail.com', 'Anurag Kumar', 19, 'false' ]

console.log(Object.entries(Obj1));

// entries gives an array of key-value pair

/*
[
  [ 'id', 'Anurag@gmail.com' ],
  [ 'Fullname', 'Anurag Kumar' ],
  [ 'age', 19 ],
  [ 'isLoggedin', 'false' ]
]
  */

