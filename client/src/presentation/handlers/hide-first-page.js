import { startGame } from '../handlers/start-game.js';

const startButton = document.getElementById('btn-start');
const textHide = document.querySelector('.all-text');

export function hideFirstPage() {
  startButton.classList.add('hide');
  textHide.classList.add('hide');
  startGame();
}
