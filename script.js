var questions = [
    {
        q: "question 1",
        options: ["a", "b", "c", "d"],
        correct: "a"
    },
    {
        q: "question 2",
        options: ["a", "b", "c", "d"],
        correct: "a"
    }
]


var start = document.getElementById("start");
var count = 0;
var time = 60;
var answer = [];
var score = 0;


start.addEventListener("click", questions);


//Click on Start button
  // start the timer
  // display the first question with options 
    // check if index < questions.length
    //create a function with index as an argument
  //each option is a button with click event on it // may be use event.target with matches function

//Stopt the timer
  // if timer = 0;
  // if user finished the quiz

//Find out if user clicked option is correct or not
  //if correct : display message (for certain time period)
  //wrong : display msg for certain time period)
  // calculate the score (but don't display) and change the timer accordingly
// index++
//display the next question

//once user finished with last question
 // stop timer
 //ask for user initials in a form > take that info and display it with score
 //save initials and score in local storage
 // a href will refer to second html file