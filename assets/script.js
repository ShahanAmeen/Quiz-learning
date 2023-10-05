var time = document.getElementById("time")
var startScreen = document.getElementById("start-screen")
var startBtn = document.getElementById("startBtn")
var questions = document.getElementById("questions")
var questionTitle = document.getElementById("question-title")
var choices = document.getElementById("choices")
var endScreen = document.getElementById("end-screen")
var finalScore = document.getElementById("final-score")
var initials = document.getElementById("initials")
var submit = document.getElementById("submit")

var secondsLeft=60;
var questionIndex=0;
var score = 0;
var intervalState;
var codequestions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "What symbol connects us to our id in our HTML?",
      choices: ["#", "$", "*", "!"],
      answer: "#"
    },
    {
      title: "_____ is allowed to reassign the value of a variable.",
      choices: ["if", "let", "const", "function"],
      answer: "const"
    },
    {
      title: "_____is syntax within a programming language that is designed to make things easier to read or to express.",
      choices: ["Python", "bootstrap", "jQuerey", "syntactic sugar"],
      answer: "systactic sugar"
    },
]

//1. start quiz function that starts timer, hides start screen
//unhides questions div, runs display questions function

//2. displayquestion function that takes current question index
//displays title, creates and displays answer choices by appending to choices div

//3. checkanswer function that comapares clicked answer choice with
//correct answer, increments question index and re runs display question function

//4. end game function that stops time, hides question div, unhides end screen div

// Function to start the quiz

function startQuiz() {
  startTimer();
 hideStartScreen();
displayQuestion();

}
function startTimer(){
intervalState = setInterval(function (){
secondsLeft=secondsLeft-1
time.textContent=secondsLeft
if(secondsLeft<=0){
  clearInterval(intervalState) //clearInterval = stop clock running
}
  },1000);//1000 = milliseconds = 1 second
}

function hideStartScreen(){
  startScreen.setAttribute("class", "hide")
questions.removeAttribute("class", "hide")

}
//display the question function with the question title
function displayQuestion(){ 
  //establish what question we are on
  var currentQuestion = codequestions[questionIndex]
  questionTitle.textContent = currentQuestion.title//updates title
  choices.innerHTML = "" //clears out previous choices before new answer choices are appended
  //go to currentQuestions choices array to indicate the process of the for loop
  // i symbolizes current array choice we are iterating over
    for(i = 0; i < currentQuestion.choices.length; i++) {
    var choiceBtn = document.createElement("button")
    choiceBtn.textContent = currentQuestion.choices[i]
    choiceBtn.setAttribute("value", currentQuestion.choices[i])
  choiceBtn.onclick=checkanswer
  
    choices.append(choiceBtn)
  }
   }
  
   function checkanswer(){
  if (this.value===codequestions[questionIndex].answer){
    console.log("correct")

  }else{
    console.log("incorrect")
  }
  questionIndex++
///if we hit end of questions, run endquiz function, else keep running displayquestion()
  if(questionIndex === codequestions.length){
    console.log("quiz is over")
    endQuiz()
  } else {
  displayQuestion()
  }
   }

//stop timer if time left, hide questions, unhide end screen
   function endQuiz(){
      clearInterval(intervalState)
      questions.setAttribute("class", "hide")
      endScreen.removeAttribute("class", "hide")
   }


//codequestions[index].choices

startBtn.onclick=startQuiz


// //function with parameters (inputs/placeholders for potential values )
// function add (a, b, c, d){
//   var total = a + b + c +d
//   return total
// }
// // arguments give true values to expected inputs
// add (2, 4, 2, 7)//15




