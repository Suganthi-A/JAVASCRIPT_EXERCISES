
// Displaying a multiple choice question


var displayQuestion = function (questionAndAnswer) {
  var options = [ "A", "B", "C", "D", "E" ];
  
  console.log(questionAndAnswer.question);
  
  questionAndAnswer.answers.forEach(
    function (answer, i) {
      console.log(options[i] + " - " + answer);
    }
  );
};


var question1 = {
question : "What is the capital of France?",
answers : [
  "Bordeaux",
  "F",
  "Paris",
  "Brussels"
],
correctAnswer : "Paris"
};

var question2 = {
question: "What is the largest planet in our solar system?",
answers: [
  "Mars",
  "Earth",
  "Jupiter",
  "Saturn"
],
correctAnswer: "Jupiter"
};

var question3 = {
question: "Who wrote 'To Kill a Mockingbird'?",
answers: [
  "Harper Lee",
  "Mark Twain",
  "Ernest Hemingway",
  "J.K. Rowling"
],
correctAnswer: "Harper Lee"
};


var questions = [question1, question2, question3];


questions.forEach(function(question) {
displayQuestion(question);
});


var displayQuestionAtIndex = function(index) {
if (index >= 0 && index < questions.length) {
  displayQuestion(questions[index]);
} else {
  console.log("Invalid question index.");
}
};


const readline = require('readline');
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

rl.question('Enter the question number (0, 1, 2): ', (input) => {
displayQuestionAtIndex(parseInt(input));
rl.close();
});

  
  
  
  /* Further Adventures
   *
   * 1) Add two more question objects.
   *
   * 2) Create an array with your question objects.
   *
   * 3) Use forEach to call displayQuestion on
   *    each of your questions.
   *
   * 4) Can you execute a command at the prompt
   *    to display a particular question?
   */
