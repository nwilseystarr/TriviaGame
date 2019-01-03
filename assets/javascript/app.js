//Javascript goes here\
$(document).ready(function(){

    //============================Start screen============================ 
    //Start button 
    $("#start-btn").on("click", function(){
        start()
    });

    //============================Question Screen============================         

    function quiz (question, choices, correct){
        this.question = question; 
        this.choices = choices;
        this.correct = correct;
 }

 quiz ()

    function start() {
           var questions =  [{
                question: "How many books are in the Harry Potter series?",
                choices: ["Five", "Six", "Seven", "Eight"],
                correct: 2,
            },
            {
                question: "How many movies are in the Harry Potter series?",
                choices: ["Five", "Six", "Seven", "Eight"],
                correct: 3,
            }, {
                question: "What house is Harry Potter in?",
                choices: ["Hufflepuff", "Gryffindor", "Ravenclaw", "Slytherin"],
                correct: 1,
            }
        ];
    
    for (i = 0; i < questions.length; i++){
        $("#question").html("Question: " + questions[i].question);
        $("#choices").html("Choices: " + questions[i].choices);
    }

    console.log(questions);
    };

  

    // setTimeout(120Seconds, 1000 * 120);
    //display final screen if time runs out

    //============================Final Screen============================ 
    //"All done! Here's how you did:"
    //Correct Answers: #
    //Incorrect Answers: #
    //Unanswered: #
    //Try Again button
})