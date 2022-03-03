const startingEl = document.querySelector('#starting');
const quizEl = document.querySelector('#quiz');
const doneEl = document.querySelector('#done');
const questionsEl = document.querySelector('#questions');
const titleEl = document.querySelector('#title');
const theScoreEl = document.querySelector('#theScore');
const doneScoreEl = document.querySelector('#doneScore');
const beginButton = document.querySelector('#starterButton');
const playerInitialsInput = document.querySelector('#playerInitials');

var cursor = 0;
var score = 100;
var seconds = 60;
var timer;

const questions = [
  {
    questionText: "What position is planet earth?",
    options: [
      "3rd",
      "4th",
      "5th",
      "th",
    ],
    rightAnswer: "3rd"
  },
  {
    questionText: "How many planets are in our solar system?",
    options: [
      "7",
      "8",
      "9",
      "10",
    ],
    rightAnswer: "8"
  },
  {
    questionText: "Which ocean is off the California coast?",
    options: [
      "Atlantic",
      "Indian",
      "Pacific",
      "Antarctic",
    ],
    rightAnswer: "Pacific"
  },
  {
    questionText: "How many days are in a year??",
    options: [
      "362",
      "363",
      "364",
      "365",
    ],
    rightAnswer: "365"
  },
  {
    questionText: "Which planet in our Solar System is known for having a ring?",
    options: [
      "Venus",
      "Mars",
      "Earth",
      "Saturn",
    ],
    rightAnswer: "Saturn"
  }
];


// Screen displays || Render
function beginScreen() {
  startingEl.style.display = "block";
  quizEl.style.display = "none";
  doneEl.style.display = "none";
}

function quizScreen() {
  startingEl.style.display = "none";
  quizEl.style.display = "block";
  doneEl.style.display = "none";
  showQuestions();

  theScoreEl.textContent = seconds;

  timer = setInterval(function () {
    seconds--;
    theScoreEl.textContent = seconds;
    console.log("Time Left:", seconds);
    if (seconds < 0) {
      clearInterval(timer)
    }
  }, 1000);
};


function showQuestions() {
  questionsEl.innerHTML = '';
  const question = questions[cursor];
  titleEl.textContent = question.questionText;
  question.options.forEach((item, i) => {
    var answerButton = document.createElement('button');
    answerButton.textContent = i + 1 + ". " + item;
    answerButton.value = item;
    questionsEl.appendChild(answerButton);
  })
}

function doneScreen() {
  startingEl.style.display = "none";
  quizEl.style.display = "none";
  doneEl.style.display = "block";
  doneScoreEl.textContent = seconds;
  clearInterval(timer);
}


function init() {
  beginScreen();
}

function saveHighScore(event){
  event.preventDefault();
  let lastScore = doneScoreEl.textContent
  let playerInitialsEl = document.querySelector("#playerInitials");
  localStorage.setItem("lastScore", JSON.stringify(lastScore));
  localStorage.setItem("playerInitials", JSON.stringify(playerInitialsEl.value));
  seconds = 60;
  playerInitialsEl.value = '';

  };
  function init(){
    beginScreen();
  }



beginButton.addEventListener('click', quizScreen);
quizEl.addEventListener('click', function (event) {
  if (event.target.matches('button')) {
    var buttonValue = event.target.value;
    var rightAnswer = questions[cursor].rightAnswer;
    if(buttonValue !== rightAnswer){
      seconds -= 10;
    };
    if(seconds <= 0){
      doneScreen();
    };
    cursor++;
    if (cursor < questions.length) {
      showQuestions();
    } else {
      doneScreen();
    };
  }
});
init();