// import { initializeState } from '../../business-logic/initialize-state.js';

const questionContainerElement = document.getElementById('question-container');
const nextButton = document.getElementById('next-btn');

// initializeState();
export function startGame() {
  questionContainerElement.classList.remove('hide');
  nextButton.classList.remove('hide');
  // setNextQuestion()
}
