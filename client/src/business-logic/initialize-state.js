// keep this file!  it works, and you will need it

import { load } from '../data-access/load.js';

export const initializeState = async () => {
  const response = await load('../../../data/quiz.json', import.meta);

  let shuffledQuestions = response.questions.sort(() => Math.random() - 0.5);
  response.questions[0] = shuffledQuestions[0];

  return response;
  //.questions[0].questions;
};

initializeState();
