var quizAll = document.getElementById("quiz"); //
var theResultsEl = document.getElementById("checkResult"); //
var theFinalScore = document.getElementById("finalScore"); //  
var quizOverDiv = document.getElementById("quizOver"); //
var questionEl = document.getElementById("questions"); //
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");
var quizTimer = document.getElementById("timer"); //
var startQuizButton = document.getElementById("startQuizBtn"); //
var startQuizDiv = document.getElementById("masterDiv"); // 
var highScoreDiv = document.getElementById("highScoreStorage"); //
var highScorePage = document.getElementById("highscorePage"); //
var highscoreInputName = document.getElementById("initials"); //
var highscoreShowName = document.getElementById("highscoreInitials"); //
var submitScoreBtn = document.getElementById("turnInScore"); //
var highscoreDisplayScore = document.getElementById("highScoreScore"); //


var theQuizQuestions = [
    {
        questions: "question 1",
        choiceA:"",
        choiceB:"",
        choiceC:"",
        choiceD:"",
        correctAnswer: "a"
    },

    {
        questions: "question 2",
        choiceA:
        choiceB:
        choiceC:
        choiceD:
        correctAnswer: "b"
    },

    {
        questions: "question 3",
        choiceA:"",
        choiceB:"",
        choiceC:"",
        choiceD:"",
        correctAnswer: "c"
    },

    {
        questions: "question 4",
        choiceA:"",
        choiceB:"",
        choiceC:"",
        choiceD:"",
        correctAnswer: "d"
    },

    {
        questions: "question 5",
        choiceA:"",
        choiceB:"",
        choiceC:"",
        choiceD:"",
        correctAnswer: "d"
    },
];

var lastQuestionIndex = theQuizQuestions.length;
var currentQuestionIndex = 0;
var timeThatIsLeft = 76;
var timeInterval;
var theScore = 0;
var right;



// timer.addEventListener("click", function(){
// if (ceaseInterval === 0) {
//     ceaseInterval = setInterval(function() {
//         secondsLeft--;
//         currentTime.
//     }
// }
});