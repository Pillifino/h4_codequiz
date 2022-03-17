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