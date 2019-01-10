//Javascript goes here\
$(document).ready(function () {

    var currentQ 
    var correctAnswer = [];
    var incorrectAnswer = [];
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
    
    // Function to decrement timer by 1 second, and to call the qtimer event if run out of time
    function decrement(){
        time--;
        $("#questionTimer").html(time);
        if (time === 0){
            qTimer();
        }
    };
    
    function quiz() {
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

    // If user does not answer within 30secs, call the qtimer (question timer) function
    function qTimer() {
        incorrectAnswer++;
        total++;
        $("#incorrect").html("Incorrect: " + incorrectAnswer);
        $("#total").html("Total: " + total);
        clearInterval(intervalId);
        timesUp();
        // quiz();
    };

    //onclick even to grab the choice 
    $(document).on("click", ".btn-choice", function choices() {
        //checks if correct
        if ($(this).text() === currentQ.correct) {
            
            //adds to the number of correct answers
            correctAnswer++;
            total++;
            //displays the number of correct answers here
            $("#correct").html("Correct: " + correctAnswer);
            $("#total").html("Progress " + total + "/" + questions.length);
            //clears the timer
            // clearInterval(intervalId);
            //check if ended
            // isEnded();
            correct ();

        } else if ($(this).text() !== currentQ.correct) {
            
            //adds to the number of incorrect answers
            incorrectAnswer++;
            total++;
            //displays the number of incorrect answers here
            $("#incorrect").html("Incorrect: " + incorrectAnswer);
            $("#total").html("Progress " + total + "/" + questions.length);
            // clearInterval(intervalId);
            // isEnded();
            incorrect ();
        };
    });
    //============================Answer Screens============================ 
    //if correct call this function 
        function correct (){
            alert("Correct!");
        // $(".questions-page").empty()
        // //display "Correct!" text 
        // $(".questions-page").append("<h2> Correct! </h2>");
        // //create a timer of 10 seconds 
        // setTimeout(function(){$(".questions-page").empty()}, 10000);
        //display total score
        isEnded();
        //Nice to have: display image or gif
        // console.log(time);
        };    
    //if incorrect call this function 
    function incorrect (){
            alert("Incorrect!");
        // $(".questions-page").empty()
        // //display "Incorrect!" text 
        // $(".questions-page").append("<h2> Wrong Answer! </h2>");
        // //create a timer of 10 seconds 
        // setTimeout(function(){$(".questions-page").empty()}, 10000);
        //display total score
        isEnded();
        //Nice to have: display image or gif
        // console.log(time);
        };    

    // //if didn't answer in time, call this function
    function timesUp (){
            alert("Times Up!");
    //     // $(".questions-page").empty()
    //     // //display "Times Up!" text 
    //     // $(".questions-page").append("<h2> Times Up! </h2>");
    //     // //create a timer of 10 seconds 
    //     // setTimeout(function(){$(".questions-page").empty()}, 10000);
    //     //display total score
            isEnded();
    //     //Nice to have: display image or gif
    //     console.log(time);
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
        $("#start-btn").hide();
        $("#choices").hide();
        $("#question").hide();
        $("#questionTimer").hide();
        $("#final-text").html("<h3> All Done, Here's how you did: </h3>")
        $("#correct").html("Correct: " + correctAnswer);
        $("#incorrect").html("Incorrect: " + incorrectAnswer);
        $("#total").html("Progress " + total + "/" + questions.length);
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
        question: "What position does Harry plan on his Quidditch team?",
        choices: ["Keeper", "Beater", "Seeker", "Chaser"],
        correct: "Seeker",
    },
    ];        

});