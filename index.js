// required npm packages
var readlineSync = require("readline-sync");
const chalk = require('chalk');

// declare a variable score to calculate the total score
var score = 0;


// declare array of object high score in quiz 
var highScoreObject = {};
var highScoreArray = [];


// rules of game
var rules = "There are some rules. There will be 10 questions";
var rules1 = "Out of which if you give at least give 7 answers correctly then you are my good friend.";
var rules2 = "If you not able to give  minimum 7 correct answer then 'we are not GOOD FRIEND 😂'.";
var rules3 = "Answer will be of one or two words only."


// Declare some variable, ready to use
var right = "Right answer 👍";
var wrong = "Wrong answer 👎";
var correctAns = "The correct answer is";
var currentScore = "Current score: ";
var emptySpace = "\n";
var congratsWin = "CONGRATULATIONS! You have scored ";
var congratsLoss = "LOL, TRY AGAIN! you don't even know NEELESH properly 😢 and your total score is ";
var endLine = chalk.yellowBright("**************************************");


// take username input 
var userName = readlineSync.question(chalk.blue('What is your name? '));
console.log(chalk.magentaBright(`Welcome home Mr. ` + chalk.bold.yellowBright(userName.toUpperCase()) + ` to play - Do you know me "Neelesh"? Quiz.`));
console.log(emptySpace);


// Quiz Rules
console.log(chalk.yellowBright("So let's begin our journey with the quiz!"));
console.log(emptySpace);
console.log(chalk.yellowBright(`${rules} \n1. ${rules1}\n2. ${rules2} \n3. ${rules3} \n${endLine}`));



// write function for taking input questions and answer
function play(questions, answers) {
  console.log(emptySpace);
  var userAnswer = readlineSync.question(chalk.blue(`${questions}?: `));
  console.log(`You entered '${userAnswer.toUpperCase()}'.`);

  if (userAnswer.toUpperCase() === answers.toUpperCase()) {
    score++;
    console.log(chalk.greenBright(right));

  }
  else {
    console.log(chalk.red(wrong));
    console.log(correctAns + chalk.italic.yellowBright(` '${answers}'.`));
  }

  console.log(currentScore + chalk.cyan(`${score}`));
  console.log(endLine);

}


// Declare array of object of questions and answers
var questionList = [{
  question: "Question 1- \n- What is my full name",
  answer: "Neelesh Singh"
},
{
  question: "Question 2- \n- What is my age 21/22/23/24",
  answer: "23"
},
{
  question: "Question 3- \n- In which city does Neelesh live",
  answer: "Kanpur"
},
{
  question: "Question 4- \n- Neelesh like which Indian snack most, Samosa or Jalebi",
  answer: "Samosa"
},
{
  question: "Question 5- \n- What is a favorite color of Neelesh",
  answer: "Blue"
},
{
  question: "Question 6- \n- Which college did Neelesh study at",
  answer: "Galgotias University"
},
{
  question: "Question 7- \n- Which is my favorite destination Santorini or Norway",
  answer: "Norway"
},
{
  question: "Question 8- \n- Which is my favorite drink coffee or tea",
  answer: "Coffee"
},
{
  question: "Question 9- \n- Which company mobile I use",
  answer: "Redmi"
},
{
  question: "Question 10- \n- Who is my favorite actor from Bollywood or Hollywood",
  answer: "Rock"
}];


for (var i = 0; i < questionList.length; i++) {
  var currentQuestion = questionList[i];
  play(currentQuestion.question, currentQuestion.answer);
}


// update playerName with their score in array of object
highScoreObject.playerName = userName;
highScoreObject.highScore = score;
highScoreArray.push(highScoreObject);

if (score > 6) {
  console.log(emptySpace);
  console.log(chalk.greenBright(`${congratsWin}${score}. Now our bond will be more strong 💪`));
  console.log(emptySpace);
  console.log(endLine);
}

if (score < 7) {
  console.log(emptySpace);
  console.log(chalk.red(`${congratsLoss}'${score}'`));
  console.log(emptySpace);
  console.log(endLine);
}

console.log(emptySpace);
console.log(chalk.magentaBright('Thank you ' + chalk.bold.white(userName.toUpperCase()) + ' for playing this quiz game! ❤️'));
console.log(emptySpace);