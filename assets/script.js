// Object Question 1
var questionObject = {
    questionText: "what is the answer to 1?",
    answerArray: [],
};
// Object Question 2
var questionObject2 = {
    questionText: "what is the answer to 2?",
    answerArray:[],
}
// Object Question 3
var questionObject3 = {
    questionText: "what is the answer to 3?",
    answerArray:[],
}
// Object Question 4
var questionObject4 = {
    questionText: "what is the answer to 4?",
    answerArray:[],
}
// Object Question 5
var questionObject5 = {
    questionText: "what is the answer to 5?",
    answerArray:[],
}

//creating query selectors
var questionContainer = document.querySelector(".question-container");
var startButton = document.querySelector(".start");

//Change text of question-container class text to object 1's property "questionText"
startButton.addEventListener('click' , function(event) {
    //
    questionContainer.innerHTML = questionObject.questionText;
})
