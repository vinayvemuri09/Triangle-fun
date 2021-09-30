var quizForm = document.querySelector(".quiz-container");
var btnQuiz = document.querySelector("#btn-submit");
var outputQuiz = document.querySelector("#output-quiz");

const correctAnswers = [
  "90°",
  "right angled",
  "hypotenuse",
  "isosceles",
  "pythagoras",
];

btnQuiz.addEventListener("click", calculateScore);

function calculateScore() {
  var score = 0,
    index = 0;
  const data = new FormData(quizForm);
  if (data.entries().next().done === true) {
    outputQuiz.innerText = "Please select your answers!";
  } else {
    var totalValues = 0;
    for (let value of data.values()) {
      totalValues += 1;
      if (value === correctAnswers[index]) {
        score += 1;
      }
      index += 1;
    }
    if (totalValues === 5) {
      outputQuiz.innerText = "Your score is " + score;
    } else {
      outputQuiz.innerText = "Please select all answers!";
    }
  }
}