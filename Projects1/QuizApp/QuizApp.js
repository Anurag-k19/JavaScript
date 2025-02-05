const questions = [
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        answers: [
            { text: "var", correct: false },
            { text: "let", correct: false },
            { text: "const", correct: false },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "Which method is used to add an element to the end of an array?",
        answers: [
            { text: "push()", correct: true },
            { text: "pop()", correct: false },
            { text: "shift()", correct: false },
            { text: "unshift()", correct: false }
        ]
    },
    {
        question: "What does `NaN` stand for in JavaScript?",
        answers: [
            { text: "Not a Number", correct: true },
            { text: "New and Null", correct: false },
            { text: "Next available Number", correct: false },
            { text: "None of the Above", correct: false }
        ]
    },
    {
        question: "Which function is used to print something in JavaScript?",
        answers: [
            { text: "console.log()", correct: true },
            { text: "print()", correct: false },
            { text: "log.print()", correct: false },
            { text: "display()", correct: false }
        ]
    },
    {
        question: "What is the output of `typeof null`?",
        answers: [
            { text: "object", correct: true },
            { text: "null", correct: false },
            { text: "undefined", correct: false },
            { text: "number", correct: false }
        ]
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        answers: [
            { text: "//", correct: true },
            { text: "/* */", correct: false },
            { text: "<!-- -->", correct: false },
            { text: "** **", correct: false }
        ]
    },
    {
        question: "Which of the following is a JavaScript framework?",
        answers: [
            { text: "React", correct: true },
            { text: "Laravel", correct: false },
            { text: "Django", correct: false },
            { text: "Flask", correct: false }
        ]
    },
    {
        question: "How do you write an IF statement in JavaScript?",
        answers: [
            { text: "if (x === 5) {}", correct: true },
            { text: "if x = 5 then {}", correct: false },
            { text: "if x == 5 {}", correct: false },
            { text: "if {x === 5}", correct: false }
        ]
    },
    {
        question: "Which of the following is NOT a primitive data type in JavaScript?",
        answers: [
            { text: "Object", correct: true },
            { text: "String", correct: false },
            { text: "Number", correct: false },
            { text: "Boolean", correct: false }
        ]
    },
    {
        question: "Which function converts a string to an integer in JavaScript?",
        answers: [
            { text: "parseInt()", correct: true },
            { text: "parseFloat()", correct: false },
            { text: "toString()", correct: false },
            { text: "String()", correct: false }
        ]
    }
];

questions.sort(() => Math.random() - 0.5);

questions.forEach((shuffeledAnswer)=>{
    shuffeledAnswer.answers.sort(()=> Math.random()-0.5);
})

const question = document.querySelector('#question');
const answer_buttons = document.querySelector('#answer-buttons')
const nextButton = document.querySelector('#next-btn')
const scoreResult = document.querySelector('#score-container')

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex =0;
    score =0;
    nextButton.style.display ='none'
    nextButton.innerHTML ="next"
    showquestion();
}


function showquestion(){
    resetstate();
    let currentQuestion = questions[currentQuestionIndex]
    question.innerHTML = `${currentQuestionIndex+1}. ${currentQuestion.question}`

    currentQuestion.answers.forEach(answer => {
        let button = document.createElement('button');
        button.innerHTML = answer.text;
        answer_buttons.appendChild(button)
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectedAnswer)

       

    });
}

    function selectedAnswer(e){
        let selectedButton = e.target;
        if(selectedButton.dataset.correct === 'true'){
            selectedButton.classList.add('correct')
            score++;
        }
        else{
            selectedButton.classList.add('wrong')

        }
        Array.from(answer_buttons.children).forEach((button)=>{
            if(button.dataset.correct === "true"){
                button.classList.add('correct')
            }
            button.disabled =true
        })

        selectedButton.disabled =true;
        

        nextButton.style.display ='block'
       
        
    }


function resetstate(){
    nextButton.style.display = 'none'
    answer_buttons.innerHTML = ""
}

nextButton.addEventListener('click',()=>{
    currentQuestionIndex++;
  
    
    if(currentQuestionIndex < questions.length){
        showquestion() 
        nextButton.style.display = 'none';
    }
    else  if (currentQuestionIndex >= questions.length) {
        scoreResult.innerHTML = `Your scored ${score} out of ${questions.length}`
        nextButton.innerHTML = "Restart";
        nextButton.removeEventListener('click', ()=>{})
        nextButton.addEventListener('click', end);

    }
   
})
function end(){
    
    currentQuestionIndex =0;
    score=0;
    scoreResult.innerHTML=""
    startQuiz()
    nextButton.removeEventListener('click', end);
}






startQuiz()