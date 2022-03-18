// Array OF Objects (Each question is an index number)
var questions = [
// index 0 = object question 1
    {
        questionText: "what is the answer to question 1?",
        choices: ["wrong answer","right answer","wrong answer","wrong answer","wrong answer"],
        answer: "right answer"
    },
// index 1 = object question 2
    {
        questionText: "what is the answer to question 2?",
        choices: ["wrong answer", "wrong answer", "right answer","wrong answer","wrong answer"],
        answer: "right answer"
    },
// index 2 = object question 3
    {
        questionText: "what is the answer to question 3?",
        choices: ["wrong answer", "wrong answer", "right answer","wrong answer","wrong answer"],
        answer: "right answer"
    },
// index 3 = object question 4
    {
        questionText: "what is the answer to question 4?",
        choices: ["wronganswer", "wrong answer", "right answer", "wrong answer","wrong answer"],
        answer: "right answer"
    },
// index 4 = object question 5
    {
        questionText: "what is the answer to question 5?",
        choices: ["wrong answer", "wrong answer", "right answer","wrong answer","wrong answer"],
        answer: "right answer"
    }];

//creating query selectors
var quiz = document.querySelector("quiz-area"); //Used to change quiz content
var startButton = document.querySelector(".start"); //start the quiz
var questionContainer = document.querySelector(".question-container"); //Space For Questions
var testChoices = document.querySelector(".answer-container"); //Space for answer choices
var timerEl = document.querySelector("#timer"); //displays time
var timerInterval; //stores setInterval API inside variable
var score = document.querySelector("#score");
var scoreCounter = 0;
var highScore = 0; //local storage

var options = document.querySelector(".options");
var option1 = document.querySelector("#opt-1")
var option2 = document.querySelector("#opt-2")
var option3 = document.querySelector("#opt-3")
var option4 = document.querySelector("#opt-4")
var option5 = document.querySelector("#opt-5")

let index = 0; 

// Hidden Items
options.style.display = "none"; // hide buttons
questionContainer.style.display = "none"; // Hide Questions
score.style.display = "none"; //Hide Score
//Functions
// display quiz area
function displayqa() {
    questionContainer.textContent = questions[index].questionText //sets text content to property of specified object based on index
    testChoices = questions[index].choices //sets text content to property of specified object based on index
    console.log(testChoices)
    option1.textContent = questions[index].choices[0] //displays text of property of choices in object 1
    option2.textContent = questions[index].choices[1] //displays text of property of choices in object 2
    option3.textContent = questions[index].choices[2] //displays text of property of choices in object 3
    option4.textContent = questions[index].choices[3] //displays text of property of choices in object 4
    option5.textContent = questions[index].choices[4] //displays text of property of choices in object 4
}

startButton.addEventListener("click", function(){
    startTimer();
    displayqa();
    options.style.display = "block";
    questionContainer.style.display = "block"; // Reveal Questions
    startButton.style.display = "none"; //Hides Start Button
})


//Start Timer
function startTimer() {
    // Sets timer
    var secondsLeft = 15;
    timerInterval = setInterval(function() {
      secondsLeft--;
      timerEl.textContent = secondsLeft + " seconds.";
      
      // Tests if time has run out
      if (secondsLeft === 0) {
        // Clears interval
        clearInterval(timerInterval);
        finishquiz();
        // setHighscore();
      }
    }, 1000);
  }
  
//Check Answers
function checkanswer() {
    var submission = this.textContent; 
    var correctAnswer = questions[index].answer
    console.log("Button Clicked")
    console.log("Correct")
    if (submission === correctAnswer){
        scoreCounter += 1 //Add a point to score
        console.log(scoreCounter)
    }  else {
        
    }

    index = index + 1

    if (index === questions.length) {
        clearInterval(timerInterval);
        finishquiz();
    } else {
        displayqa();
    }
}

//Finish Quiz
function finishquiz(){
    timerEl.textContent = "Quiz Over"
    questionContainer.style.display = "none"
    options.style.display = "none"
    setscore();
}

//Set Score
function setscore() {
    score.textContent = "Score: " + scoreCounter
    score.style.display = "block"; //Reveal Score
}

// Event Listener
option1.addEventListener("click", checkanswer);
option2.addEventListener("click", checkanswer);
option3.addEventListener("click", checkanswer);
option4.addEventListener("click", checkanswer);
option5.addEventListener("click", checkanswer);


// for loop through the questions
for (let i = 0; i < questions[index].choices.length; i++) {
    displayqa();
  }
