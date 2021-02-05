const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let i = 0;
let candidateName;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = input.question("What is your name? ");
let correctAnswer = ['sally ride',true,40,'trajectory',3];

let questions = ['Who was the first American woman in space? ',"True or False: 5000 meters = 5 kilometers? ", '(5 + 3)/2 * 10 = ? ','Given the array [8, "Orbit", "Trajectory", 45], what entry is at index 2? ','What is the minimum crew size for the International Space Station (ISS)? '] ;
let candidateAnswer = [];
let correctAnswers = 0;
let candidateAnswers = 0;


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
 candidateName = question;
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for(let i = 0; i<= questions.length-1; i++){
    let val = input.question(`${i+1}\) ${questions[i]}`); 
    if(typeof(val) === 'string'){
      val = val.toLowerCase();
    }
    


  candidateAnswer.push(val)
  }
  //console.log(candidateAnswer)
}

function gradeQuiz(candidateAnswer) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //
  for(let i = 0; i < candidateAnswer.length;i++){ 
    if(candidateAnswer[i] == correctAnswer[i]){
       candidateAnswers++
       console.log(`${i+1}\) Your Answer: ${candidateAnswer[i]}`)
       console.log(`   Correct Answer: ${correctAnswer[i]}`)       
    }
    else{  
  console.log(`${i+1}\) Your Answer: ${candidateAnswer[i]}`)
  console.log(`   Correct Answer: ${correctAnswer[i]}`)     
    }
  }  
  
  return console.log(`Your Score: ${candidateAnswers/correctAnswer.length*100}`);
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  console.log(gradeQuiz(candidateAnswer));
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};

/*const input = require('readline-sync');
let name = input.question("What is your name? ");
let questionArr = 
let answerKeyArr = ['sally ride',true,40,'trajectory',3]
const input2 = require('readline-sync');
let userAnswerArr  = [];
let results = 0;


console.log(`Candidate Name: ${name}`);
//ask Questions and Gather User Input
for(let i = 0; i<= questionArr.length-1; i++){
 let val = input.question(`${i+1}\) ${questionArr[i]}`);
 
 if(typeof(val) === 'string'){
  val = val.toLowerCase();
 }
 userAnswerArr.push(val)
}
 if(userAnswerArr[i].includes(answerKeyArr[i])){
  results++;
 }

console.log(`Your answer: ${userAnswerArr[i]}`);
console.log(`Correct answer: ${answerKeyArr[i]}\n`); 
}//end of For Loop
//print results
console.log('\n');
console.log(`>>> Overall Grade: ${Math.abs(results/(questionArr.length))*100}% <<<`);
if(results >=4){
  console.log(`>>> Status: PASSED <<<`)
}
else{
  console.log(`>>> Status: FAILED <<<`)
}*/