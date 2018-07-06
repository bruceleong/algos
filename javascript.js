//closure with 'a'

function retirement(retireAge) {
  let a = ' years left until retirement. '
  return (yearOfBirth) => {
    let age = 2016 - yearOfBirth;
    console.log((retireAge - age) + a)
  }
}

const retirementUS = retirement(66)
// console.log(retirementUS(1990))

//constructor

function Question(question, anwers, correct) {
  this.question = question;
  this.anwers = anwers;
  this.correct = correct;
}

// Question.prototype.displayQuestion() {
//   console.log(this.question);
//   for (let i = 0; i < )
// }

let q1 = new Question('is JS, coolest?', ['yes', 'no'], 0);

let q2 = new Question('name of this course teacher', ['me', 'blah'], 2);

let q3 = new Question('best describe coding', ['awesome', 'fun', 'hard'], 0);

let questions = [q1, q2, q3];

let n = Math.floor(Math.random() * questions.length);

