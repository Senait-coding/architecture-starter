// keep this file!  it works, and you will need it

import { load } from '../data-access/load.js';


export const initializeState = async () => {
 const response=await load('../../../data/quiz.json', import.meta);

const answer=response.questions[0].question

return answer;

}

initializeState();



// const checkIfCorrect=async()=>{

// const response =await load('../../../data/quiz.json', import.meta);
// const data=await response.json()

// console.log (data + 'I am here')


// }

// checkIfCorrect();