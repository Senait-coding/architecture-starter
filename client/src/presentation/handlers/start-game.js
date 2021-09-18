import { initializeState } from '../../business-logic/initialize-state.js';

const questionContainerElement = document.getElementById('question-container');
const nextButton = document.getElementById('next-btn');
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');

export const initializeApp = async () => {
  // this works! you will only need to change the name of the .json file

  const firstQuestion = await initializeState();

  return firstQuestion;
};
const a = await initializeApp();

// questionElement.addEventListener('click', initializeState)
export function startGame() {
  questionContainerElement.classList.remove('hide');
  questionElement.innerText = a.questions[0].question;
  answerButtons.innerText = a.questions[0].answers.text;
  nextButton.classList.remove('hide');
}
// export function startGame() {
//   questionContainerElement.classList.remove('hide');
//   // questionElement.innerText = a;
//   nextButton.classList.remove('hide');
// }
