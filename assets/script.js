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
  displayQuestions(currentQuestionIndex);

}
//display the question function with the question title
function displayQuestion(index){
  if(index < quizQuestion.length) {
    var questionTitle = document.getElementById("question");
    questionTitle.textContent = codequestions[index].question;
  }
}

