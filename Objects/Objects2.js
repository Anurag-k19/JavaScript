// Destructuring of objects


const Obj = {
    Studentname:"Anurag",
    age:19,
    course:"B. Tech",
    branch:"cse"
}

//  We use "Obj.course" to access an Object instance, but we will have type it every time we want to print "course" that's why we use destructure

// But we can destructure the object and easily

const {course} = Obj

console.log(course);   //  B. Tech


//  we can even change the name of instance to use it easily

const{course:cour}=Obj

const{Studentname : name}= Obj 

console.log(cour);   /// B. Tech

console.log(name);



