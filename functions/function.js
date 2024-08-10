// Functions

function myNmame(){
    console.log("Anurag Kumar");
    

}
// myNmame()

function add(a,b){
    return a+b

}
const result = add(3,4)
// console.log(result);


function userloginmessage(username){

    //  in case of empty string or undefined(no inputs) we can use " username === undefined " or " !username " latter is the more professional type
    
    if(!username){
        return "please enter a valid username"
    }
    return `${username} just logged in`
}

const message = userloginmessage("")  //Anurag just logged in        

// const message = userloginmessage("")  //please enter a valid username

// const message = userloginmessage()   //please enter a valid username


console.log(message);
