class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){                    // In JavaScript, a static property is a property of a class that belongs to the class itself, not to any instance of the class
        return `123`                      // Static properties are not copied to instances of the class; they are shared among all instances but accessed through the class itself.
    }                                     // static keyword: Static properties are explicitly marked with the static keyword inside the class.
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
// console.log(iphone.createId());           //  It will give error as we are accessing static properties using instance of the class

console.log(User.createId());                // This is how we can access the static properties using the class itself
