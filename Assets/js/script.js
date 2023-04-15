// Sets the global variables for the game
var startButton = document.querySelector(".start");
var timerElement = document.querySelector(".timer-count");
var scoreBtn = document.querySelector(".scorebtn");
var quizcontainer = document.querySelector(".quizcontainer");
var timercontainer = document.querySelector(".timercontainer");
var scorescontainer = document.querySelector(".scorescontainer");
var hide = document.querySelector(".hide");
var quiz = document.querySelector("#quiz");
var end = document.querySelector("#end");
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
var scoreCounter = "";
var isWin = false;
var scoreInput = document.querySelector(".scoreinput");
var score = document.querySelector(".score");
var list = document.querySelector(".highscores");

// The startGame function is called when the start button is clicked
function startGame() {
  isWin = false;
  timerCount = 100;
  // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
  // Start the timer and quiz game
  startTimer()
  startQuiz()
}

// The winGame function is called when timer reaches 0
function winGame() {
  startButton.disabled = false;
  setScore()
}

// The setScore function stores the score count into the local storage
function setScore() {
  localStorage.setItem("scoreCount", scoreCounter); 
}

// The setTimer function starts and stops the timer and triggers winGame function
function startTimer() {
  // Sets timer
  timercontainer.setAttribute("class", "container");
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      // Tests if win condition is met
      if (isWin && timerCount > 0) {
        // Clears interval and stops timer
        clearInterval(timer);
        winGame();
        endGame();
      }
    }
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      winGame();
      endGame();
    }
    if (timerCount <= 0) {
      clearInterval(timer);
      winGame();
      endGame();
    }
  }, 1000);
}

// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);

// The startGame function runs the quiz questions
function startQuiz() {
  quizcontainer.setAttribute("class", "container");
  question1()
  quiz.setAttribute("class", "");
  q1.setAttribute("class", "");
}
btn1.addEventListener("click", checkanswer)
btn2.addEventListener("click", checkanswer)
btn3.addEventListener("click", checkanswer)
btn4.addEventListener("click", checkanswer)
var questioncounter = 0;

// Run Question 1 quiz question
function question1() {
  questioncounter++;
  question.textContent = "Commonly used data types DO NOT include:";
  btn1.textContent = "1. strings";
  btn2.textContent = "2. boolean";
  btn3.textContent = "3. alerts";
  btn4.textContent = "4. numbers";
  btn1.value = "incorrect"
  btn2.value = "incorrect"
  btn3.value = "correct"
  btn4.value = "incorrect"
}

// The checkAnswer function will check if the button that was clicked is correct or incorrect
function checkanswer(event) {
  if (event.target.value == "correct") {
    answer.textContent = " Correct!";
  } else {
  answer.textContent = " Incorrect!"
  timerCount = timerCount - 10;
  }
// Move on to the next question
  if (questioncounter == 1) {
  question2()
  } else if (questioncounter == 2) {
  question3()
  } else if (questioncounter == 3) {
    question4()
  } else if (questioncounter == 4) {
    question5()
  } else {
    endGame()
  }
} 

// Run Question 2 quiz question
function question2() {
  questioncounter++;
  question.textContent = "The condition in an if/else statement is enclosed within:";
  btn1.textContent = "1. quotes";
  btn2.textContent = "2. curly brackets";
  btn3.textContent = "3. parentheses";
  btn4.textContent = "4. square brackets";
  btn1.value = "incorrect"
  btn2.value = "incorrect"
  btn3.value = "correct"
  btn4.value = "incorrect"
}

// Run Question 3 quiz question
function question3() {
  questioncounter++;
  question.textContent = "Arrays in JavaScript can be used to store:";
  btn1.textContent = "1. numbers and strings";
  btn2.textContent = "2. other arrays";
  btn3.textContent = "3. booleans";
  btn4.textContent = "4. all of the above";
  btn1.value = "incorrect"
  btn2.value = "incorrect"
  btn3.value = "incorrect"
  btn4.value = "correct"
}

// Run Question 4 quiz question
function question4() {
  questioncounter++;
  question.textContent = "String values must be enclosed within ____ when being assigned to variables.";
  btn1.textContent = "1. commas";
  btn2.textContent = "2. curly brackets";
  btn3.textContent = "3. quotes";
  btn4.textContent = "4. parentheses";
  btn1.value = "incorrect"
  btn2.value = "incorrect"
  btn3.value = "correct"
  btn4.value = "incorrect"
}

// Run Question 5 quiz question
function question5() {
  questioncounter++;
  question.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:";
  btn1.textContent = "1. JavaScript";
  btn2.textContent = "2. terminal/bash";
  btn3.textContent = "3. for loops";
  btn4.textContent = "4. console log";
  btn1.value = "incorrect"
  btn2.value = "incorrect"
  btn3.value = "incorrect"
  btn4.value = "correct"
}

// Add an event listener to the Enter button
scoreBtn.textContent = "Enter";
scoreBtn.addEventListener("click",addScore);

// Retrieve high score values from local storage or create an empty array
var highScores = JSON.parse(localStorage.getItem("highscoresstorage")) || []

// The addScore function creates an array for the initials inputted and score count
function addScore() {
  var data = {
    initials: scoreInput.value,
    score: timerCount
  }

// Push the data into the local storage and set it
  highScores.push(data)
  localStorage.setItem("highscoresstorage", JSON.stringify(highScores))

  // Create a new list item for each new high score
  for (let i = 0; i < highScores.length; i++) {
    var li = document.createElement("li")
    li.textContent = "Initials: "+highScores[i].initials+"  Score: "+highScores[i].score
    list.appendChild(li)
  }
}

// Reveal the "End Game!" text
function endGame() {
  scorescontainer.setAttribute("class", "container");
  q1.setAttribute("class", "hide");
  q2.setAttribute("class", "hide");
  q3.setAttribute("class", "hide");
  q4.setAttribute("class", "hide");
  q5.setAttribute("class", "hide");
  quiz.setAttribute("class", "hide");
  end.setAttribute("class", "");
  isWin = true;
}