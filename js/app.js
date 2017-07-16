const quesFrame = document.getElementById('quesFrame');
const answerFrame = document.getElementById('answerFrame');
const nextButton = document.getElementById('nextButton');
let lis = document.getElementsByTagName('li');

let quesCount = 0;
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
	console.log(choice);
}

//5.  compare the answer choice to the right answer
function compareAnswer(choice) {
	if (choice === quesArray[quesCount].correct) {
		//6.1 if it is correct, update correctCount
		correctCount++;
	}
	quesCount++ //6.2 update question counter
}

nextButton.addEventListener('click', function(){
	showQuestion();
	showAnswers(shuffleAnswers(quesArray[quesCount].answersArr));
	compareAnswer(choice);
	console.log(correctCount, quesCount);
});

//6.  show the next question and repeat 1 - 6.1

//7. at the end, show the user's score

//append holdChoice to lis
for (let i = 0; i < lis.length; i++) {
	lis[i].addEventListener('click', holdChoice);
}


//ISSUES TO FIX
// 	1. correctCount is not updating in the right place.
//    1.1 QuesCount and correct answer are off
//  2. build show score functionality
//  3.  build intro splash page


