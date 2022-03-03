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
var startQuizBtn = document.getElementById("startQuizBtn"); //
var startQuizDiv = document.getElementById("masterDiv"); // 
var highScoreStorage = document.getElementById("highScoreStorage"); //
var highScorePage = document.getElementById("highscorePage"); //
var highscoreInputName = document.getElementById("initials"); //
var highscoreShowName = document.getElementById("highscoreInitials"); //
var turnInScoreBtn = document.getElementById("turnInScore"); //
var highscoreScoreScore = document.getElementById("highScoreScore"); //


var theQuizQuestions = [
    {
        questions: "question 1",
        choiceA:"filler",
        choiceB:"filler",
        choiceC:"filler",
        choiceD:"filler",
        correctAnswer: "a"
    },

    {
        questions: "question 2",
        choiceA:"filler",
        choiceB:"filler",
        choiceC:"filler",
        choiceD:"filler",
        correctAnswer: "2"
    },

    {
        questions: "question 3",
        choiceA:"filler",
        choiceB:"filler",
        choiceC:"filler",
        choiceD:"filler",
        correctAnswer: "c"
    },

    {
        questions: "question 4",
        choiceA:"filler",
        choiceB:"filler",
        choiceC:"filler",
        choiceD:"filler",
        correctAnswer: "d"
    },

    {
        questions: "question 5",
        choiceA:"filler",
        choiceB:"filler",
        choiceC:"filler",
        choiceD:"filler",
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
        return showTheScore();
    } 
    var currentQuestion = theQuizQuestions[currentQuestionIndex];
    questionEl.innerHTML = "<p>" + currentQuestion.questions + "</p>";
    btnA.innerHTML = currentQuestion.choiceA;
    btnB.innerHTML = currentQuestion.choiceB;
    btnC.innerHTML = currentQuestion.choiceC;
    btnD.innerHTML = currentQuestion.choiceD;
};


function startTheQuiz(){
    quizOverDiv.style.display = "none";
    startQuizDiv.style.display = "none";
    generateTheQuizQuestions();


    timeInterval =setInterval(function(){
        timeThatIsLeft--;
        quizOverDiv.textContent = "The Time left: " + timeThatIsLeft;

        if(timeThatIsLeft === 0){
            clearInterval(timeInterval);
            showTheScore();
        }




    },1000);
    quizAll.style.display = "block";
}

function showTheScore(){
    quizAll.style.display = "none";
    quizOverDiv.style.display = "none";
    clearInterval(timeInterval);
    highscoreInputName.value = "";
    theFinalScore.innerHTML = "Your score is " + theScore + "out of " + theQuizQuestions.length;
}

turnInScoreBtn.addEventListener("click", function highScore(){

    if(highscoreInputName.value === ""){
        alert("You can't leave the Initials black");
        return false;
    }else{
        var theSavedHighscores = JSON.parse(localStorage.getItem("theSavedHighscores")) || [];
        var currentPlayer = highscoreInputName.value.trim();
        var theCurrentHighscore = {
            name : currentPlayer,
            score : score
        }    

        quizOverDiv.style.display = "none";
        highScoreStorage.style.display = "flex";
        highScoreDiv.style.display = "block";
        endGameBtns.style.display = "flex";
    
        savedHighscores.push(currentHighscore);
        localStorage.setItem("theSavedHighscores", JSON.stringify(theSavedHighscores));
        generateTheHighscores();
    }    
});

function generateTheHighscores(){
    highscoreInputName.innerHTML = "";
    thehighscoreScoreScore.innerHTML = "";
    var theHighscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
    for (i=0; i<theHighscores.length; i++){
        var newNameSpan = document.createElement("li");
        var newScoreSpan = document.createElement("li");
        newNameSpan.textContent = theHighscores[i].name;
        newScoreSpan.textContent = theHighscores[i].score;
        highscoreInputName.appendChild(newNameSpan);
        highscoreScoreScore.appendChild(newScoreSpan);
    }
}    


function showTheHighscore(){
    startQuizDiv.style.display = "none"
    quizOverDiv.style.display = "none";
    highScoreStorage.style.display = "flex";
    highScorePage.style.display = "block";
    generateTheHighscores();
}







startQuizBtn.addEventListener("click",startQuiz);