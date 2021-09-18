// keep this file!  it works, and you will need it

import { load } from '../data-access/load.js';
let shuffledQuestions;
let currentQuestionIndex = 0;

export const initializeState = async () => {
  const response = await load('../../../data/quiz.json', import.meta);
  shuffledQuestions = response.questions.sort(() => Math.random() - 0.5);
  response.questions[currentQuestionIndex] =
    shuffledQuestions[currentQuestionIndex];

  return response;
};

initializeState();
