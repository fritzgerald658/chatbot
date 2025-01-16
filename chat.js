let firstQuestionAnswer = null;
let secondQuestionAnswer = null;
const greetings = "Hi there";
const questions = [
  "Do you have more than $10,000 in credit card debt?",
  "Are you currently employed or have a steady source of income?",
];
const message = [
  "Based on Your Responses Our debt relief program may not be the best fit for your current situation. However, here are some alternatives that might help:",
  "Great News! You're a Great Fit For Our Program Based on your responses, we can help reduce your credit card debt significantly. Imagine being free from overwhelming monthly payments and finally getting the fresh start you deserve.",
];

var firstQuestionContainer = document.getElementById("first-question");
var secondQuestionContainer = document.getElementById("second-question");
var responseMessage = document.getElementById("response-message");
var greetingsLoader = document.getElementById("greetings-loader");
var firstQuestionLoader = document.getElementById("first-question-loader");
var secondQuestionLoader = document.getElementById("second-question-loader");
var greet = document.getElementById("greetings-h1");
var questionOne = document.getElementById("first-question-h1");
var questionTwo = document.getElementById("second-question-h1");
var oneYes = document.getElementById("yes");
var oneNo = document.getElementById("no");
var secondNo = document.getElementById("second-no");
var secondYes = document.getElementById("second-yes");
var firstAnswer = document.getElementById("first-question-answer");
var secondAnswer = document.getElementById("second-question-answer");
var errorResponse = document.getElementById("error-response-message");
var successResponse = document.getElementById("success-response-message");

window.addEventListener("load", function () {
  // First, show the greeting
  setTimeout(function () {
    greetingsLoader.style.display = "none";
    greet.style.display = "block";
    firstQuestionLoader.style.display = "inline-block";
    firstQuestionContainer.style.display = "flex";
    // After greeting, show the first question
    setTimeout(function () {
      firstQuestionLoader.style.display = "none";
      questionOne.style.display = "block";

      oneYes.style.display = "inline-block";
      oneNo.style.display = "inline-block";
    }, 2000); // Delay for 1 second after greeting
  }, 2000); // Initial delay before showing greeting
});

oneYes.addEventListener("click", function (e) {
  e.preventDefault();
  showNextQuestion();
  hideQuestionOneYesNo();

  secondQuestionContainer.style.display = "flex";
  firstAnswer.classList.add("answers");

  firstAnswer.innerHTML = "Yes";
  firstQuestionAnswer = true;
});

oneNo.addEventListener("click", function (e) {
  e.preventDefault();
  showNextQuestion();
  hideQuestionOneYesNo();

  secondQuestionLoader.style.display = "block";
  firstAnswer.classList.add("answers");
  secondQuestionContainer.style.display = "flex";
  firstAnswer.innerHTML = "No";
  firstQuestionAnswer = false;
});

secondYes.addEventListener("click", function (e) {
  e.preventDefault();
  hideQuestionTwoYesNo();
  secondAnswer.classList.add("answers");
  secondAnswer.innerHTML = "Yes";
  secondQuestionAnswer = true;
  checkAnswers();
});

secondNo.addEventListener("click", function (e) {
  e.preventDefault();
  hideQuestionTwoYesNo();
  secondAnswer.classList.add("answers");
  secondAnswer.innerHTML = "No";
  secondQuestionAnswer = false;
  checkAnswers();
});

function checkAnswers() {
  if (secondQuestionAnswer === true && firstQuestionAnswer === true) {
    successResponse.style.display = "flex";
  } else if (firstQuestionAnswer === false && secondQuestionAnswer === false) {
    errorResponse.style.display = "flex";
  } else {
    errorResponse.style.display = "flex";
  }
}

function showNextQuestion() {
  secondQuestionLoader.style.display = "block";

  // Hide the loader after 2 seconds
  setTimeout(function () {
    secondQuestionLoader.style.display = "none";
    questionTwo.style.display = "block";
    showQuestionTwoYesNo();
  }, 2000);
}

function hideQuestionOneYesNo() {
  oneYes.style.display = "none";
  oneNo.style.display = "none";
}

function showQuestionTwoYesNo() {
  secondNo.style.display = "block";
  secondYes.style.display = "block";
}

function hideQuestionTwoYesNo() {
  secondYes.style.display = "none";
  secondNo.style.display = "none";
}
