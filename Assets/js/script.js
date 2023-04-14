var startButton = document.querySelector(".start");
var timerElement = document.querySelector(".timer-count");
var score = document.querySelector(".score");
var isWin = false;
var quizcontainer = document.querySelector(".quizcontainer");
var hide = document.querySelector(".hide");
var quiz = document.querySelector("#quiz");
var end = document.querySelector("#end");
var scoreCounter = "";

// The startGame function is called when the start button is clicked
function startGame() {
  isWin = false;
  timerCount = 10;
  // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
  // Start the time and game
  startTimer()
  startQuiz()
}

// The winGame function is called when the win condition is met
function winGameCorrect() {
  answer.textContent = "Correct! \n You've finished the quiz!";
  startButton.disabled = false;
  endGame();
}

function winGameIncorrect() {
  answer.textContent = "Incorrect! \n You've finished the quiz!";
  startButton.disabled = false;
  endGame();
}

function endGame() {
  q1.setAttribute("class", "hide");
  q2.setAttribute("class", "hide");
  q3.setAttribute("class", "hide");
  q4.setAttribute("class", "hide");
  q5.setAttribute("class", "hide");
  quiz.setAttribute("class", "hide");
  end.setAttribute("class", "");
  isWin = true;
}

// The loseGame function is called when timer reaches 0
function winGame() {
  startButton.disabled = false;
  setScore()
}

function setScore() {
  score.textContent = scoreCounter;
  localStorage.setItem("scoreCount", scoreCounter); 
}

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      // Tests if win condition is met
      if (isWin && timerCount > 0) {
        // Clears interval and stops timer
        clearInterval(timer);
        winGame();
      }
    }
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      endGame();
    }
  }, 1000);
}

// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);

// Sets the global variables for the game
var question = document.querySelector(".question");
var btn1 = document.querySelector(".btn1");
var btn2 = document.querySelector(".btn2");
var btn3 = document.querySelector(".btn3");
var btn4 = document.querySelector(".btn4");
var answer = document.querySelector(".answer");
var q1 = document.querySelector("#question1");
var q2 = document.querySelector("#question2");
var q3 = document.querySelector("#question3");
var q4 = document.querySelector("#question4");
var q5 = document.querySelector("#question5");

// The startGame function runs the quiz questions
function startQuiz() {
  quizcontainer.setAttribute("class", "container");
  question1()
  quiz.setAttribute("class", "");
  q1.setAttribute("class", "");
}

// Run Question 1 quiz question
function question1() {
  question.textContent = "Commonly used data types DO NOT include:";
  btn1.textContent = "1. strings";
  btn2.textContent = "2. boolean";
  btn3.textContent = "3. alerts";
  btn4.textContent = "4. numbers";
  btn1.addEventListener("click", incorrect1)
  btn2.addEventListener("click", incorrect1)
  btn3.addEventListener("click", correct1)
  btn4.addEventListener("click", incorrect1)
}
function correct1() {
  answer.textContent = " Correct!";
  question2()
}
function incorrect1() {
  answer.textContent = " Incorrect!"
  question2()
}

// Run Question 2 quiz question
function question2() {
  question.textContent = "The condition in an if/else statement is enclosed within:";
  btn1.textContent = "1. quotes";
  btn2.textContent = "2. curly brackets";
  btn3.textContent = "3. parentheses";
  btn4.textContent = "4. square brackets";
  document.querySelector('.btn1').addEventListener("click", incorrect2)
  document.querySelector('.btn2').addEventListener("click", incorrect2)
  document.querySelector('.btn3').addEventListener("click", correct2)
  document.querySelector('.btn4').addEventListener("click", incorrect2)
}
function correct2() {
  answer.textContent = " Correct!";
  question3()
}
function incorrect2() {
  answer.textContent = " Incorrect!";
  question3()
}

// Run Question 3 quiz question
answer.replace(answer, answer);
function question3() {
  question.textContent = "Arrays in JavaScript can be used to store:";
  btn1.textContent = "1. numbers and strings";
  btn2.textContent = "2. other arrays";
  btn3.textContent = "3. booleans";
  btn4.textContent = "4. all of the above";
  document.querySelector('.btn1').addEventListener("click", incorrect3)
  document.querySelector('.btn2').addEventListener("click", incorrect3)
  document.querySelector('.btn3').addEventListener("click", incorrect3)
  document.querySelector('.btn4').addEventListener("click", correct3)
}
function correct3() {
  answer.textContent = " Correct!";
  question4()
}
function incorrect3() {
  answer.textContent = " Incorrect!";
  question4()
}

// Run Question 4 quiz question
function question4() {
  question.textContent = "String values must be enclosed within ____ when being assigned to variables.";
  btn1.textContent = "1. commas";
  btn2.textContent = "2. curly brackets";
  btn3.textContent = "3. quotes";
  btn4.textContent = "4. parentheses";
  document.querySelector('.btn1').addEventListener("click", incorrect4)
  document.querySelector('.btn2').addEventListener("click", incorrect4)
  document.querySelector('.btn3').addEventListener("click", correct4)
  document.querySelector('.btn4').addEventListener("click", incorrect4)
}
function correct4() {
  answer.textContent = " Correct!";
  question5()
}
function incorrect4() {
  answer.textContent = " Incorrect!";
  question5()
}

// Run Question 5 quiz question
function question5() {
  question.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:";
  btn1.textContent = "1. JavaScript";
  btn2.textContent = "2. terminal/bash";
  btn3.textContent = "3. for loops";
  btn4.textContent = "4. console log";
  document.querySelector('.btn1').addEventListener("click", incorrect5)
  document.querySelector('.btn2').addEventListener("click", incorrect5)
  document.querySelector('.btn3').addEventListener("click", incorrect5)
  document.querySelector('.btn4').addEventListener("click", correct5)
}
function correct5() {
  answer.textContent = " Correct!";
  winGameCorrect();
}
function incorrect5() {
  answer.textContent = " Incorrect!";
  winGameIncorrect();
}