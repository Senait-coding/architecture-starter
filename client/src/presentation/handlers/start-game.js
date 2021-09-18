import { initializeState } from '../../business-logic/initialize-state.js';

const questionContainerElement = document.getElementById('question-container');
const nextButton = document.getElementById('next-btn');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

export const initializeApp = async () => {
  // this works! you will only need to change the name of the .json file

  const firstQuestion = await initializeState();

  return firstQuestion;
};
const a = await initializeApp();

export function startGame() {
  questionContainerElement.classList.remove('hide');
  questionElement.innerText = a.questions[0].question;
  a.questions[0].answers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    nextButton.classList.remove('hide');

    answerButtonsElement.appendChild(button);
  });
}
