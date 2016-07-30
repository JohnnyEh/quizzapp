/*Assignmet of objects */
var question = [{
	statement: "What did Al eat every day for breakfast?",
    answers: ["Scrambled Eggs", "Sauerkraut", "Pickled Cucumbers", "Spam, spam, spam, spam, baked beans and spam"],
    quesNum: 0,
    corrAns: 2
},
{
	statement: "How did Al survive the plane crash?",
    answers: ["His superpowers kicked in", "The pilot pulled him from the wreckage", "He had his tray table up and his seat back in the full upright position", "Using the seat as a floatation device"],
    quesNum: 1,
    corrAns: 3
},
{
	statement: "Al buys a dozen box of what from the donut shop?",
	answers: ["Warm, delicious donuts", "Starving, crazed weasels", "Mangy, rabid cats", "Slimy, slithering snakes"],
	quesNum: 2,
	corrAns: 2
},
{
	statement: "Al luckily runs into the girl of his dreams.  What is her name?",
	answers: ["Daisy", "Peach", "Samus", "Zelda"],
	quesNum: 3,
	corrAns: 4
},
{
	statement: "What is Al's life-long dream?",
	answers: ["Lazer-tag arena manager", "Basketball player", "Part-time job at the Sizzler", "Substitute teacher"],
	quesNum: 4,
	corrAns: 3
}]

var results = {
	poor: "Man, I knew you were gonna suck at this quiz. At least listen to the song before trying again.",
	average: "Yeah, and if a million monkeys typed on a million typewriters for a million years they'd eventually type out the works of Spielberg.  Or something like that.",
	excellent: "Wow, man! That was totally amazing!  Wakka Wakka doo doo Yeah!!"
}

/*Assignment of Variables*/

var tally = 0

var cycleCounter = 1

/*script begins by hiding most of the elements, 
then the following functions start with button click */

$(document).ready(function() {
	$(".start").show();
	$(".question").hide();
	$(".results").hide();
});

startQuiz();

quizCycle();

/*Function to begin quiz*/

function startQuiz(){
	$(".startButton").click(function(){
		$(".start").hide();
		$("#quesNum").append(question[0].quesNum + 1);
		$("#statement").append(question[0].statement);
		$("#ans1").append(question[0].answers[0]);
		$("#ans2").append(question[0].answers[1]);
		$("#ans3").append(question[0].answers[2]);
		$("#ans4").append(question[0].answers[3]);
		$(".question").show();
		$(".results").hide();
	}
)};

/*Function to cycle through questions, 
tally answers, and finally display results*/

function quizCycle(){
 	$("#subButton").click(function(){
 		getValue();
 		if (cycleCounter < 5){
 			$('.answer').prop('checked', false);
			$("#quesNum").replaceWith('<span id="quesNum">' + (question[cycleCounter].quesNum + 1) +'</span>');
			$("#statement").replaceWith('<p id="statement">' + question[cycleCounter].statement + '</p>');
			$("#ans1").replaceWith('<span id="ans1">' + question[cycleCounter].answers[0] + '</span>');
			$("#ans2").replaceWith('<span id="ans2">' + question[cycleCounter].answers[1] + '</span>');
			$("#ans3").replaceWith('<span id="ans3">' + question[cycleCounter].answers[2] + '</span>');
			$("#ans4").replaceWith('<span id="ans4">' + question[cycleCounter].answers[3] + '</span>');
			$(".tally").replaceWith('<span class="tally">' + tally + '</span>');
			cycleCounter++;
}
		else {
			$(".start").hide();
			$(".question").hide();
			$(".tally").replaceWith('<span class="tally">' + tally + '</span>');
			if (tally == 5){
				$(".message").replaceWith('<p class="message">' + results.excellent + '</p>');
		}
			else if (tally == 4) {
				$(".message").replaceWith('<p class="message">' + results.average + '</p>');
		}
			else {
				$(".message").replaceWith('<p class="message">' + results.poor + '</p>');
		}
			$(".results").show();
		}
}
)};

/*Function obtains answer, evaluates it, 
and tallys correct responses; is called by previous function*/

function getValue(){
		var receivedAns = $('input[name=question]:checked', '#answers').val();
		if (receivedAns == null){
			alert("Please choose an answer");
		}
		else if (receivedAns == question[cycleCounter -1].corrAns){ 
      		tally = tally + 1;
    }
  };

