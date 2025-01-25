class User{
    constructor(username,password){
        this.username = username       // this.username = username in the constructor or elsewhere, it calls the setter for username, and the value of username passed as an argument gets assigned to the internal property (usually prefixed with an underscore, e.g., _username).
        this.password = password       // // Calls the setter with the value 'password'

    }

    get username(){
        return this._username.toUpperCase()    // // Getter returns the internal _username in uppercase
    }

    set username(name){
        this._username = name       //   // Setter assigns the value 'name' to _username

    }
    get password(){
        return `${this._password}qwerty`
    }

    set password(value){
        this._password = value

    }

}

const newUser = new User("Anurag",1234)    // Calls setters for username and password
console.log(newUser.username);             // Calls the getter, logs "ANURAG"
console.log(newUser.password);             // Calls the getter, logs "1234qwerty"
