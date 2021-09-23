import { showNextQuestion } from '../handlers/next-question.js';
//import { currentQuestionIndex } from '../handlers/start-game.js';
export const nextPage = document
  .getElementById('next-btn')
  .addEventListener('click', showNextQuestion);
