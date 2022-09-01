let readlineSync = require("readline-sync");

let score = 0;

const questions = [
  {
    question: "What is my name? ",
    answer: "Tharun Kumar",
  },
  {
    question: "What is my current age? ",
    answer: "22",
  },
  {
    question: "Where am I from? ",
    answer: "Chennai",
  },
  {
    question: "What is my favourite color? ",
    answer: "Black",
  },
  {
    question: "What is my favourite food? ",
    answer: "Briyani",
  },
];

const welcomeUser = () => {
  let username = readlineSync.question("What should I call you? ");

  console.log(`Welcome ${username}! Let's see, "How well do you me"`);
  console.log(" ");
};

const play = (question, answer) => {
  const userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("You're RIGHT!");
    score++;
  } else {
    console.log("You're WRONG!");
  }
  console.log(" ");
  console.log("----------------");
  console.log("current score: ", score);
  console.log("----------------");
  console.log(" ");
};

const game = () => {
  questions.forEach((ques) => {
    play(ques.question, ques.answer);
  });
};

const showFinalScore = () => {
  console.log("YAY!! Your final score is " + score);
};

welcomeUser();

game();

showFinalScore();
