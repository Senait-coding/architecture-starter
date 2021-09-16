// keep this file!  it works and you will need it

// keep this import statement
import { initializeState } from '../../business-logic/initialize-state.js';
// import { addNumberEvent } from '../custom-events/add-number.js';


// you can remove the rest of them

// keep this function! it works and you will need it

 const startButton = document.getElementById('btn-start')
 const textHide=document.querySelector('.all-text')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')

// let shuffledQuestions;
let currentQuestionIndex;
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')


 
export const initializeApp = async () => {
  // this works! you will only need to change the name of the .json file

 const firstQuestion=await initializeState()
 
 return firstQuestion;
  }
const a= await initializeApp()
// await initializeApp()
startButton.addEventListener('click', startGame  )
// questionElement.addEventListener('click', initializeState)
  function startGame(){
  startButton.classList.add('hide')
  textHide.classList.add('hide')
  // shuffledQuestions = questions.sort(() => Math.random() - .
  questionContainerElement.classList.remove('hide')
    questionElement.innerText=a;
  nextButton.classList.remove('hide')

  // console.log('hello');questions[0].question
  // showQuestion(question);
  }
   
// function showQuestion(question) {
//   questionElement.innerText = question.question
//   question.answers.forEach(answer => {
//     const button = document.createElement('button')
//     button.innerText = answer.text
//     button.classList.add('btn')
//     if (answer.correct) {
//       button.dataset.correct = answer.correct
//     }
//     button.addEventListener('click', selectAnswer)
//     answerButtonsElement.appendChild(button)
//   })
// }
  







  


