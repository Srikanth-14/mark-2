var readlineSync = require("readline-sync");
var score = 0;
// data of high score
// array of objects
var questions = [{
  question: "In which year does pawan kalyan Born? ",
  answer: "1971"
}, {
  question: "In which year does Pawan Kalyan made entry into politics? ",
  answer: "2008"
},{
  question: "25th movie of Pawan Kalyan? ",
  answer: "Agnyaathavaasi"
},{
  question: "Who was the first co-star of Pawan Kalyan?",
  answer: "Supriya"
},
{
  question: "What is the name of the political party of Pawan Kalyan? ",
  answer: "Janasena Party"
}];
function welcome() {
  var userName = readlineSync.question("What's your name? ");
  console.log("Welcome " + userName + " it's a quiz on Pawan Kalyan");
}
// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
  } else {
    console.log("wrong!");
  }
  console.log("current score: ", score);
  console.log("-------------")
}
function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}
function showScores() {
  console.log("YAY! You SCORED: ", score);
}
welcome();
game();
showScores();
