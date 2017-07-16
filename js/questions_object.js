
function Question(questions, answersArr, correct) {
  this.question = questions;
  this.answersArr = answersArr;
  this.correct = correct;
}

var ques1 = new Question(
	'Who celebrated their 20th birthday the day that <em>Trainspotting</em> was released?', 
	[
		'Kelly MacDonald',
		'Ewan Bremner',
		'Johnny Lee Miller',
		'Susan Vidler'
		], 
	'Kelly MacDonald'
	);
var ques2 = new Question(
	'Johnny Lee Miller was mainly cast due to his ability to impersonate which actor?',
	[
		'Sean Connery',
		'Robert DeNiro',
		'Marlon Brando',
		'Roger Moore'
		], 
	'Sean Connery'

	);
var ques3 = new Question(
	'What was the feces in &quot;The Worst Toilet in Scotland&quot; scene really made of?', 
		[
		'Chocolate',
		'Real shit',
		'Liquid resin',
		'Dyed toothpaste'
		],
	'Chocolate'
	);
var ques4 = new Question(
	'Which actor from the movie played Renton in the stage adaptation of <em>Trainspotting</em>?', 
	[
		'Ewan Bremner',
		'Ewan McGregor',
		'Johnny Lee Miller',
		'Kevin McKidd'
		],
	'Ewan Bremner'
	);
var ques5 = new Question(
	'What was Begbie&#39;s other nickname?', 
	[
		'Franko',
		'Francis',
		'Mad Begbie',
		'Psycho'
		],
	'Franko'
	);

var quesArray = [
  ques1, ques2, ques3, ques4, ques5
];







