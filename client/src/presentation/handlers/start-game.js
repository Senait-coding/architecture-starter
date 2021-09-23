import { initializeState } from '../../business-logic/initialize-state.js';

const questionContainerElement = document.getElementById('question-container');
const nextButton = document.getElementById('next-btn');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
let shuffledQuestions;
let currentQuestionIndex = 0;
//Access to promises u need to use async await or then
export const initializeApp = async () => {
  // this works! you will only need to change the name of the .json file

  const firstQuestion = await initializeState();
  return firstQuestion;
};
const dataQuestions = await initializeApp();
console.log('test', dataQuestions);
export function startGame() {
  questionContainerElement.classList.remove('hide');
  questionElement.innerText =
    dataQuestions.questions[currentQuestionIndex].question;

  dataQuestions.questions[currentQuestionIndex].answers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    nextButton.classList.remove('hide');

    answerButtonsElement.appendChild(button);
    currentQuestionIndex++;
  });
}
