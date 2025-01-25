//  Simpler method of doing this is using class and constructor

// this technique is used before ES6


function User(username,password){
    // Initialize the internal properties
    this._username = username
    this._password = password


    // Define 'username' property with getter and setter
Object.defineProperty(this,'username',{
    get: function(){
        return this._username.toUpperCase()   // Getter returns the uppercase value
    },

    set: function(name){
        this._username = name                  // Setter assigns the value to _username
    }
})

  // Define 'password' property with getter and setter
Object.defineProperty(this,'password',{
    get:function(){
        return `${this._password}qwerty`          // Getter appends 'qwerty' to the password
    },
    set:function(value){
        this._password = value                    // Setter assigns the value to _password
    }
})
}


const newUser = new User("Anurag",123) 
console.log(newUser.username);              // Logs "ANURAG" (uppercase value)
console.log(newUser.password);              // Logs "123qwerty" (password with 'qwerty' appended)
