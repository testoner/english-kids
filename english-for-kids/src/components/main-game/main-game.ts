import gameCard from '../game-card/game-card';
import CardType from '../storeg/storeg';
import addFlipp from './gen-flipp';

const renderGame = async (data: CardType): Promise<void> => {
  const html = `
  <div class="main-cards">
  </div>
  <div class="start-btn disabled">
    <div class="btn-game">Start Game</div>
  </div>`;
  const root = document.createElement('main');
  root.setAttribute('class', 'main-game');
  root.innerHTML = html;
  const page = <HTMLElement>document.querySelector('.main');
  page.classList.add('disabled');
  page.after(root);
  for (let i = 0; i < data.nameEng.length; i += 1) {
    gameCard(data, i);
  }
  addFlipp();
};
export default renderGame;
