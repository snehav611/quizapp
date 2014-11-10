$(document).ready(function() {
/**Define variables**/
	var count = 1;
	var numberCorrect = 0;
	var currentQuestion = 0;
    var answerChoice = $('input[type="radio"]:checked').val();

/** Questions **/
console.debug("got here");
var questionsArray = [
                {
                        question: "Question 1: What is Chandler's middle name?",
                        choices: ["Muriel", "Gene", "Lewis", "Mabel"],
                        questionNumber: 0,
                        correctAnswer: 0
                },
{
                        question: "How much money did Phoebe say she'd give Chandler to stop smoking?",
                        choices: ["$5,000", "$7,000", "$9,000", "$2,000"],
                        questionNumber: 1,
                        correctAnswer: 1
                },
 {
                        question: "In TOW Ross Can’t Flirt, what does he keep talking to the pizza delivery girl about?",
                        choices: ["Cardboard", "Gas", "Evolution", "Little boys"],
                        questionNumber: 2,
                        correctAnswer: 1
                },
  {
                        question: "What is Ross’ look-a-like Russ’ profession?",
                        choices: ["Paediatrician", "Periodontist",  "Professor", "Pedicurist"],
                        questionNumber: 3,
                        correctAnswer: 1
                },
 
{
                        question: "What does Joey suffer from when Pheobe is in labor?",
                        choices: ["Kidney stones", "Sympathy pains", "Migraines", "Flatulence"],
                        questionNumber: 4,
                        correctAnswer: 0
                },
                {
                        question: "How much store credit does Ross get for returning his broken couch?",
                        choices: ["$800", "$2", "$50", "$4"],
                        questionNumber: 5,
                        correctAnswer: 3
                },
];
/**Question number**/	
	function questionNumber() {
		count++;
		$("#count").text(count);
	};
 	
 /**Check Answer**/
 	function checkAnswer() {
 		var answerChoice = $('input[type="radio"]:checked').val();
        if (answerChoice == questionsArray[currentQuestion].correctAnswer) {
 			numberCorrect++;
			$("#correct").text("Question " + count + " answer correct!");
		} else { 
			$("#correct").text("Question " + count + " answer incorrect.")
		}
 	};
 /**Next question**/
 	function nextQuestion() {
 		if (currentQuestion < 5) {
            $(".question").empty();
            $("#answerSection").empty();
            currentQuestion++;
            var newQuestion = $(".question").append(": " + questionsArray[currentQuestion].question); 
                for (var i = 0; i <= 3; i++) {
                document.getElementById("answerSection").innerHTML += '<input type="radio" name="choice" class= "choice" value='+i+'>' + questionsArray[currentQuestion].choices[i] + '<br/>';
        }
        } else {
         	$("#questionSection").empty();
            $("#answerSection").empty();
            $("#coffee").remove();
            $("#correct").text("");
            $("#submit").css("display", "none");
         	var finalScore = '<span id="final">Congratulations on finishing the quiz!  You correctly answered '+numberCorrect+'/6 questions.'
                $("#answerSection").html(finalScore);
        }
    };
 /**Submit answer**/
    $("#submit").click(function() {
        var answerChoice = $('input[type="radio"]:checked').val();
        if (answerChoice == undefined) {
            alert("Please select an answer before submitting");
        } else {
        checkAnswer();
        nextQuestion();
        questionNumber();
        };
    });
});