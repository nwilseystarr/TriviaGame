//Javascript goes here\
$(document).ready(function () {

    var currentQ;

    $("#submit-btn").hide();
    
    //============================Start screen============================ 
    //Start button 
    $("#start-btn").on("click", function () {
        $("#start-btn").hide();
        $("#submit-btn").show();
        //Pick a random question
        var index = Math.floor(Math.random() * questions.length);
        //Display question
        currentQ = questions[index];
        $("#question").html(currentQ.question);

        //Display choices

        for (var i = 0; i < currentQ.choices.length; i++) {
            var currentChoices = $("<button>").addClass("btn btn-light btn-choice").text(currentQ.choices[i]);
            currentChoices.appendTo("#choices");
        }
    });
 
     // Check that the choice is correct 
            //onclick even to grab the choice 

         $(document).on("click", ".btn-choice", function () {
            console.log($(this));
            if ($(this).text() === currentQ.correct){
                alert("Correct!")
            } else {
                alert("Wrong!")
            }
        });
        
        //add it to the score create score var score ++ loss var loss ++ 
        // Display either "Correct" or "incorrect" screen with the current score 
        //Then move to the next Q and Choices 
        //Repeat until finished

    //============================Question Screen============================         

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
    }
    ];

    console.log(questions);

    // function quiz(question, choices, correct) {
    //     this.question = question;
    //     this.choices = choices;
    //     this.correct = correct;
    // }

    // setTimeout(120Seconds, 1000 * 120);
    //display final screen if time runs out

    //============================Final Screen============================ 
    //"All done! Here's how you did:"
    //Correct Answers: #
    //Incorrect Answers: #
    //Unanswered: #
    //Try Again button
})