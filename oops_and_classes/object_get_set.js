// we can use getter and setter in Objects too

const User =  {
    // The prefix _ in _username is a common convention used in JavaScript (and many other programming languages) 
    // to indicate that the variable is meant to be private or internal to the object
    _username: "Anurag",
    _password:123,


    get username(){
        return this._username.toUpperCase()
    },
    set username(value){
        this._username = value
    }
}

const User1 = Object.create(User)

console.log(User1.username);
