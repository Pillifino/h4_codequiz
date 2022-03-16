// Object Question 1
var questionObject = {
    questionText: "what is the answer to 1?",
    answer1: "This is the answer",
    answer2: "This is not the answer",
};
// Object Question 2
var questionObject2 = {
    questionText: "what is the answer to 2?",
    answer1: "This is the answer",
    answer2: "This is not the answer",
    answer3: "This is not the answer",
    answer4: "This is not the answer",
    answer5: "This is not the answer",
}
// Object Question 3
var questionObject3 = {
    questionText: "what is the answer to 3?",
    answer1: "This is not the answer",
    answer2: "This is the answer",
    answer3: "This is not the answer",
    answer4: "This is not the answer",
}
// Object Question 4
var questionObject4 = {
    questionText: "what is the answer to 4?",
    answer1: "This is not the answer",
    answer2: "This is not the answer",
    answer3: "This is the answer",
    answer4: "This is not the answer",
}
// Object Question 5
var questionObject5 = {
    questionText: "what is the answer to 5?",
    answer1: "This is not the answer",
    answer2: "This is not the answer",
    answer3: "This is the answer",
}

// Start Button Function
var startbutton = document.querySelector("#start")

startbutton.addEventListener("click", function(){
    console.log(JSON.stringify(questionObject,null,4))
})

//Next Question Function
var test = document.querySelector(".test");

test.addEventListener("click", function(event){
    var element = event.target;

    if (element.matches(".page")) {
        var state = element.dataset.state;
        if (state === "hidden") {
            console.log(JSON.stringify(questionObject2,null,4)) //find a way to print the next string everytime an answer is chosen
        }   
    }
})