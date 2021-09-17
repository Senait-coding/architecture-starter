// keep this file!  it works, and you will need it

import { load } from '../data-access/load.js';

export const initializeState = async () => {
  const response = await load('../../../data.json', import.meta);

  const answer = response.questions[0].question;

  return answer;
};

initializeState();

// export function getShuffledQuestions() {
//   initializeState();
//   let shuffledQuestions;
//   let currentQuestionIndex;
//   shuffledQuestions = questions.sort(() => Math.random() - 0.5);
//   currentQuestionIndex = 0;
// }
