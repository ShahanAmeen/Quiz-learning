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

function beginQuiz() {
  // Start the timer
  timerInterval = setInterval(function () {
    // Update the timer on the page
    document.getElementById("time").textContent = timeRemaining;

    if (timeRemaining <= 0) {
      // End the quiz if the timer reaches 0
      endQuiz();
    } else {
      // Continue decrementing the timer
      timeRemaining--;
    }
  }, 1000);

  // Display the first question
  displayQuestion(currentQuestionIndex);
}

// Function to display a question and choices
function displayQuestion(index) {
  var questionElement = document.getElementById("question-title");
  var choicesElement = document.getElementById("choices");

  // Check if there are questions left
  if (index < questions.length) {
    var question = questions[index];
    questionElement.textContent = question.question;

    // Clear previous choices
    choicesElement.innerHTML = "";

    // Create choice buttons
    for (var i = 0; i < question.choices.length; i++) {
      var choiceButton = document.createElement("button");
      choiceButton.textContent = question.choices[i];
      choiceButton.addEventListener("click", function () {
        checkAnswer(this.textContent);
      });
      choicesElement.appendChild(choiceButton);
    }
  } else {
    // End the quiz if there are no more questions
    endQuiz();
  }
}

// Function to check if an answer is correct
function checkAnswer(answer) {
  var question = questions[currentQuestionIndex];

  if (answer === question.correctAnswer) {
    // Update score for correct answer
    score++;
  } else {
    // Subtract time for incorrect answer
    timeRemaining -= 10;
  }

  // Move to the next question
  currentQuestionIndex++;
  displayQuestion(currentQuestionIndex);
}

// Function to end the quiz
function endQuiz() {
  clearInterval(timerInterval);

  // Hide quiz questions and show the end screen
  document.getElementById("questions").classList.add("hide");
  document.getElementById("end-screen").classList.remove("hide");

  // Display the final score
  document.getElementById("final-score").textContent = score;
}

// Function to save high scores
function saveHighScore() {
  var initials = document.getElementById("initials").value;
  // Implement logic to save high scores here
}

// Event listener for start button
document.getElementById("startBtn").addEventListener("click", startQuiz);

// Event listener for submit button
document.getElementById("submit").addEventListener("click", saveHighScore);


