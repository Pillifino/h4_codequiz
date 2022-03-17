// Array OF Objects (Each question is an index number)
var questions = [
// index 0 = object question 1
    {
        questionText: "what is the answer to question 1?",
        choices: ["wrong answer","right answer","wrong answer","wrong answer"],
        answer: "2"
    },
// index 1 = object question 2
    {
        questionText: "what is the answer to question 2?",
        choices: ["wrong answer", "wrong answer", "right answer"],
        answer: "3"
    },
// index 2 = object question 3
    {
        questionText: "what is the answer to question 3?",
        choices: ["wrong answer", "right answer"],
        answer: "2"
    },
// index 3 = object question 4
    {
        questionText: "what is the answer to question 4?",
        choices: ["wronganswer", "wrong answer", "right answer", "wrong answer"],
        answer: "3"
    },
// index 4 = object question 5
    {
        questionText: "what is the answer to question 5?",
        choices: ["right answer", "wrong answer"],
        answer: "1"
    }];

//creating query selectors
var quiz = document.querySelector("quiz-area"); //all quiz content goes here
var startButton = document.querySelector(".start"); //start the quiz
var questionContainer = document.querySelector(".question-container"); //where each question object will go 
var choices = document.querySelector(".answer-container"); //answer choices 
var userchoice = []

var timer;
var timerCount;
var score = 0;
var scoreCounter = 0;
var highScore = 0; //local storage
var isFinished; false;

//Functions
//Init Function is called when page loads
function init(){
    getHighscore
}
// start game
function startGame() {
    timerCount = 60;
    startButton.disabled = true;
    startTimer()
}

function finishGame(){
    quiz.textContent = "You Finished! And Your Score Was:"
    startButton.disabled = false;
    setHighscore()
}
// Starrt 60 second countdown
function startTimer() {

}
//add point when correct
function addPoint() {

}
//lose time when incorrect
function timeLoss() {

}
//Finish Quiz
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if test is finished
        if (isFinished && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          setHighscore();
        }
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        setHighscore();
      }
    }, 1000);
  }
//set score function
  function setscore() {
      score.textContent =  scoreCounter
      localStorage.setItem("score", scoreCounter)

      if(score > highScore){
          localStorage.setItem("highScore", scoreCounter)
      }
  }

//Event Listeners
startButton.addEventListener("click", startGame);

// Calls init( so that it fires when page opened
init();

//Bonuse Add Reset button
var resetButton = document.querySelector(".reset-button");

function resetGame() {
    //Resets win and loss counts
    score = 0; 
    highScore = 0;
    // Renders highscore and sets them into client storage
    setscore()
    setHighscore()
}
// Attaches event listener to button
resetButton.addEventListener('click', resetGame);