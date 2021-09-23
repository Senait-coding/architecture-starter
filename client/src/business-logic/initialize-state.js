// keep this file!  it works, and you will need it

import { load } from '../data-access/load.js';
let shuffledQuestions;
let currentQuestionIndex;

export const initializeState = async () => {
  const response = await load('../../../data/quiz.json', import.meta);
  shuffledQuestions = response.questions;

  return response;
};

initializeState();

//export
