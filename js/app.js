const quesFrame = document.getElementById('quesFrame');
const answerFrame = document.getElementById('answerFrame');
const submitButton = document.getElementById('submitButton');
const nextButton = document.getElementById('nextButton');
let lis = document.getElementsByTagName('li');

let quesCount = -1;
let correctCount = 0;
let choice = '';

// 1. show the question
function showQuestion() {
	quesFrame.innerHTML = quesArray[quesCount].question;
}

//2.  shuffle the answer choices
function shuffleAnswers(arr) {
	for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

//3.  show the answerchoices
function showAnswers(arr) {
	for (let i = 0; i < lis.length; i++){
		lis[i].innerText = arr[i];
	}
}

//4.  user selects an answer choice
  //4.1 if a user changes the answer choice, variable is updated
function holdChoice() {
	choice = this.innerText;
	compareAnswer(choice);
}

//5.  compare the answer choice to the right answer
function compareAnswer(choice) {
	if (choice === quesArray[quesCount].correct) {
		//6.1 if it is correct, update correctCount
		correctCount++;
   }
}

//6.  show the next question and repeat 1 - 6.1
nextButton.addEventListener('click', function(){
	quesCount++ //6.2 update question counter
	//7. at the end, show the user's score
	if (quesCount === 5) {
		quesFrame.innerHTML = '';
		answerFrame.innerHTML = `
			<h3>You got ${correctCount} of 5 correct.</h3>
		`;
	} else {
		showQuestion();
		showAnswers(shuffleAnswers(quesArray[quesCount].answersArr));
	}
});

//append holdChoice to lis
for (let i = 0; i < lis.length; i++) {
	lis[i].addEventListener('click', holdChoice);
}





//STATUS::
//ISSUES TO FIX
// 	1. set up submit button so that user can only submit once
       //1.1  submit should be when user enters a choice,
       // it is submited, and listeners on other lis removed
//  2. build show score functionality
//  3.  build intro splash page
// 4/ style lis so that user knows which item is selected


