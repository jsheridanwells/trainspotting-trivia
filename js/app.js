const quesFrame = document.getElementById('quesFrame');
const answerFrame = document.getElementById('answerFrame');
const submitButton = document.getElementById('submitButton');
const nextButton = document.getElementById('nextButton');
let lis = document.getElementsByTagName('li');

let quesCount = -1;
let correctCount = 0;
let choice = '';

//0. show question and answer fields
function showFields() {
	quesFrame.className = 'shown';
	answerFrame.className = 'shown';
}

//0.1 change button text
function changeButton() {
	nextButton.innerHTML = 'Next &gt;';
}

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

//3.1 reset color of answer choices
function setLiColors() {
	for (let i = 0; i < lis.length; i++) {
		lis[i].className = 'not-selected';
	}
}

//4.  user selects an answer choice
  //4.1 if a user changes the answer choice, variable is updated
  //4.2 color of answer choice highlighted
function holdChoice() {
	choice = this.innerText;
	setLiColors();
	this.className += 'selected';
	compareAnswer(choice);
}

//5.  compare the answer choice to the right answer
function compareAnswer(choice) {
	if (choice === quesArray[quesCount].correct) {
		//5.1 if it is correct, update correctCount
		correctCount++;
   }
}

//6.  show the next question and repeat 1 - 5.1
nextButton.addEventListener('click', function(){
	showFields();
	changeButton();
	quesCount++ //6.1 update question counter
	//7. at the end, show the user's score
	if (quesCount === 5) {
		quesFrame.innerHTML = '';
		nextButton.className = 'hidden';
		answerFrame.innerHTML = `
			<h3>You got ${correctCount} of 5 correct.</h3>
		`;
	} else {
		showQuestion();
		showAnswers(shuffleAnswers(quesArray[quesCount].answersArr));
		setLiColors();
	}
});

//append holdChoice to lis
for (let i = 0; i < lis.length; i++) {
	lis[i].addEventListener('click', holdChoice);
}