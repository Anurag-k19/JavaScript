let RandomNumber = parseInt(Math.random()*100+1);

const submit = document.querySelector(".submitButton");
const userInput = document.querySelector("#inputNumber");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastresult");
const lowOrHi = document.querySelector(".lowOrHigh");
const StartOver = document.querySelector("#result");
 
const p = document.createElement('p');
p.style.color="white"

let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame==true){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        
        
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Enter a valid Number")
    }
    else if(guess <1){
        alert("Enter a number more than or equal to 1")

    }
    else if(guess >100){
        alert("Enter a number less than or equal to 100")
        
    }
    else{
        prevGuess.push(guess);
        if(numGuess == 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${RandomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }

    }
}

function checkGuess(guess){
    if(guess == RandomNumber){
        displayMessage("You guessed it right")
        endGame()
    }
    else if(guess<RandomNumber){
        displayMessage("number is too low")
    }
    else{
        displayMessage("number is too high")
    }
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    remaining.innerHTML = `${11-numGuess}` 

}

function displayMessage(message){
    lowOrHi.innerHTML = `${message}`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<button id="newGame">Start New Game </button>`
    StartOver.appendChild(p)
    playGame = false
    newGame()

}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        RandomNumber = parseInt(Math.random()*100+1);
        prevGuess = []
        numGuess=1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11-numGuess}`
        userInput.removeAttribute('disabled')
        StartOver.removeChild(p)
        playGame = true
        displayMessage('');
    });
}
