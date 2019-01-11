//Javascript goes here\
$(document).ready(function () {

    $("#try-again-btn").hide();

    var currentQ
    var correctAnswer = 0;
    var incorrectAnswer = 0;
    var total = [];
    var time = 0;
    var index = -1;
    var intervalId;

    //Start button 
    $("#start-btn").on("click", function () {
        $("#start-btn").hide();
        total = 0;
        isEnded();
    });

    //reset
    $("#try-again-btn").on("click", function () {
        $("#try-again-btn").hide();
        reset();
    });

    function reset() {
        index = -1;
        correctAnswer = 0;
        incorrectAnswer = 0;
        total = 0;
        time = 0;
        $("#final-text").hide();
        $("#correct").html("Correct: " + correctAnswer);
        $("#incorrect").html("Incorrect: " + incorrectAnswer);
        $("#total").html("Progress " + total + "/" + questions.length);
        quiz();
    };


    // Function to decrement timer by 1 second, and to call the qtimer event if run out of time
    function decrement() {
        time--;
        $("#questionTimer").html(time);
        if (time === 0) {
            qTimer();
        }
    };

    function quiz() {
        $(".questions-page").show()
        $(".answer-page").hide()
        clearInterval(intervalId);
        time = 15;
        intervalId = setInterval(decrement, 1000);
        $("#choices").empty();
        index++;
        currentQ = questions[index];
        //Display question
        $("#question").html(currentQ.question);
        //Display choices
        for (var i = 0; i < currentQ.choices.length; i++) {
            var currentChoices = $("<button>").addClass("btn btn-light btn-choice").text(currentQ.choices[i]);
            currentChoices.appendTo("#choices");
        };
    };
    //============================User Choices============================
    // If user does not answer within 30secs, call the qtimer (question timer) function
    function qTimer() {
        incorrectAnswer++;
        total++;
        $("#incorrect").html("Incorrect: " + incorrectAnswer);
        $("#total").html("Progress " + total + "/" + questions.length);
        clearInterval(intervalId);
        timesUp();
    };

    //onclick even to grab the choice 
    $(document).on("click", ".btn-choice", function choices() {
        //checks if correct
        if ($(this).text() === currentQ.correct) {
            //adds to the number of correct answers
            correctAnswer++;
            //adds to the total number of questions answered here
            total++;
            //displays the number of correct answers here
            $("#correct").html("Correct: " + correctAnswer);
            //displays the progress here
            $("#total").html("Progress " + total + "/" + questions.length);
            //calls the correct function to change slides
            correct();

        } else if ($(this).text() !== currentQ.correct) {
            //adds to the number of incorrect answers
            incorrectAnswer++;
            //adds to the total number of questions answered here
            total++;
            //displays the number of incorrect answers here
            $("#incorrect").html("Incorrect: " + incorrectAnswer);
            //displays the progress here
            $("#total").html("Progress " + total + "/" + questions.length);
            //calls the incorrect function to change slides
            incorrect();
        };
    });
    //============================Answer Screens============================ 
    //if correct call this function 
    function correct() {
        clearInterval(intervalId);
        $(".questions-page").hide()
        $(".answer-page").show()
        $(".answer-page").html("<h2> Correct! </h2>");
        //change timer to 10 seconds
        setTimeout(isEnded, 3000);
        console.log(time)
    };

    //if incorrect call this function 
    function incorrect() {
        clearInterval(intervalId);
        $(".questions-page").hide()
        console.log(currentQ.correct);
        $(".answer-page").show()
        $(".answer-page").html("<h2> Wrong! </h2>" + "The correct answer was " + "<strong>" + currentQ.correct + "</strong>");
        //change timer to 10 seconds
        setTimeout(isEnded, 3000);
        console.log(time)
    };

    // //if didn't answer in time, call this function
    function timesUp() {
        clearInterval(intervalId);
        $(".questions-page").hide()
        $(".answer-page").show()
        $(".answer-page").html("<h2> You didn't answer in time! </h2>" + "The correct answer was " + "<strong>" + currentQ.correct + "</strong>");
        //change timer to 10 seconds
        setTimeout(isEnded, 3000);
        console.log(time)
    };

    //============================Checks if Game has Ended============================ 

    function isEnded() {
        if (total < (questions.length)) {
            quiz();
        }
        if (total == (questions.length)) {
            endGame();
        };
    };

    // // ============================Game End Screen============================ 
    function endGame() {
        clearInterval(intervalId);
        $(".questions-page").hide()
        $(".answer-page").hide()
        $("#start-btn").hide();
        $("#final-text").show();
        $("#final-text").html("<h3> All Done, Here's how you did: </h3>")
        $("#correct").html("Correct: " + correctAnswer);
        $("#incorrect").html("Incorrect: " + incorrectAnswer);
        $("#total").html("Progress " + total + "/" + questions.length);
        $("#try-again-btn").show();
    };

    //============================Questions============================         

    var questions = [{
        question: "How many books are in the Harry Potter series?",
        choices: ["Five", "Six", "Seven", "Eight"],
        correct: "Seven",
    },
    {
        question: "How many movies are in the Harry Potter series?",
        choices: ["Six", "Seven", "Eight", "Nine"],
        correct: "Eight",
    }, {
        question: "What house is Harry Potter in?",
        choices: ["Hufflepuff", "Gryffindor", "Ravenclaw", "Slytherin"],
        correct: "Gryffindor",
    }, {
        question: "What position does Harry play on his Quidditch team?",
        choices: ["Keeper", "Beater", "Chaser", "Seeker"],
        correct: "Seeker",
    }, {
        question: "Who is Harry Potter's godfather?",
        choices: ["Sirus Black", "Remus Lupin", "Severus Snape", "Peter Pettigrew"],
        correct: "Sirus Black",
    }, {
        question: "What form does Harry's patronus take?",
        choices: ["Otter", "Stag", "Weasel", "Doe"],
        correct: "Stag",
    }, {
        question: "How many children do the Weasleys have?",
        choices: ["Six", "Seven", "Eight", "Nine"],
        correct: "Seven",
    }, {
        question: "What is the last Horcrux that is destroyed?",
        choices: ["Nagini", "The Ring", "Harry Potter", "Diadem"],
        correct: "Seven",        
    }, 
    ];

});