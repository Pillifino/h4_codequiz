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
var quiz = document.querySelector("quiz-area"); //all quiz content goes here
var startButton = document.querySelector(".start"); //start the quiz
var questionContainer = document.querySelector(".question-container"); //where each question object will go 
var testChoices = document.querySelector(".answer-container"); //answer choices 
var timerEl = document.querySelector("#timer");
var timerInterval;
var timerCount;
var score = 0;
var scoreCounter = 0;
var highScore = 0; //local storage

var option1 = document.querySelector("#opt-1")
var option2 = document.querySelector("#opt-2")
var option3 = document.querySelector("#opt-3")
var option4 = document.querySelector("#opt-4")
var option5 = document.querySelector("#opt-5")

let index = 0; 
var buttons = document.querySelector(".buttonflex");
buttons.style.display = "none"; // hide buttons

//Functions
// display quiz area
function displayqa() {
    questionContainer.textContent = questions[index].questionText
    testChoices = questions[index].choices 
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
    buttons.style.display = "block";
    startButton.style.display = "none";
})

function finishGame(){
    timerEl.textContent = "Game Over"
}
// Starrt 60 second countdown

//Finish Quiz
function startTimer() {
    // Sets timer
    var secondsLeft = 5;
    timerInterval = setInterval(function() {
      secondsLeft--;
      timerEl.textContent = secondsLeft + " seconds.";
      
      // Tests if time has run out
      if (secondsLeft === 0) {
        // Clears interval
        clearInterval(timerInterval);
        finishGame();
        // setHighscore();
      }
    }, 1000);
  }
//Check Answers
function checkanswer() {
    var submission = this.textContent;
    var correctAnswer = questions[index].answer
    console.log(this.textContent + " Button Clicked")
    console.log(correctAnswer + " Correct Answer")
    if (submission === correctAnswer){
        score += 1
        console.log(score)
    } else {
        // Wrong
    }

    index = index + 1

    if (index === questions.length) {
        clearInterval(timerInterval);
        finishGame();
    } else {
        displayqa();
    }
}

//set score function  

  function setscore() {
      score.textContent =  scoreCounter
      localStorage.setItem("score", scoreCounter)

      if(score > highScore){
          localStorage.setItem("highScore", scoreCounter)
      }
  }


//Bonuse Add Reset button
// var resetButton = document.querySelector(".reset-button");

// function resetGame() {
//     //Resets win and loss counts
//     score = 0; 
//     highScore = 0;
//     // Renders highscore and sets them into client storage
//     setscore()
//     setHighscore()
// }

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
