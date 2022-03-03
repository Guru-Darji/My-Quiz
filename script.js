var quizAll = document.getElementById("quiz"); //
var theResultsEl = document.getElementById("checkResult"); //
var theFinalScore = document.getElementById("finalScore"); //  
var quizOverDiv = document.getElementById("quizOver"); //
var questionEl = document.getElementById("questions"); //
var btnA = document.getElementById("a");
var btnB = document.getElementById("b");
var btnC = document.getElementById("c");
var btnD = document.getElementById("d");
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

function generateTheQuizQuestions(){
    quizOverDiv.style.display = "none";
    if (currentQuestionIndex === lastQuestionIndex){
        return showScore();
    } 
    var currentQuestion = theQuizQuestions[currentQuestionIndex];
    questionEl.innerHTML = "<p>" + currentQuestion.questions + "</p>";
    btnA.innerHTML = currentQuestion.choiceA;
    btnB.innerHTML = currentQuestion.choiceB;
    btnC.innerHTML = currentQuestion.choiceC;
    btnD.innerHTML = currentQuestion.choiceD;
};

}


// timer.addEventListener("click", function(){
// if (ceaseInterval === 0) {
//     ceaseInterval = setInterval(function() {
//         secondsLeft--;
//         currentTime.
//     }
// }
});