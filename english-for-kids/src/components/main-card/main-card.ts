import checkStatus from '../main-game/check-status';
import typeGame from '../main-game/game-type';
import renderGame from '../main-game/main-game';
import startGame from '../start-game/start-game';
import CardType from '../storeg/storeg';

const createCard = (data: CardType, i: number): void => {
  const html = `
  <div class="front">
    <div class="card-img"  style="background-image: url(../mainpage/${i}.png);">
    </div>
    <div class="card-cont">
      <h2 class="card-title">${data.category}</h2>
      <div class="card-condition card-round"></div>
    </div>
  </div>`;
  const root = document.createElement('div');
  root.setAttribute('class', 'main-card');
  root.innerHTML = html;
  root.addEventListener('click', () => {
    renderGame(data);
    checkStatus();
    typeGame();
    startGame(data.category);
    const mainCat = <HTMLElement>document.querySelector('.menu-main');
    const allCat = document.querySelectorAll('.li-item');
    mainCat.classList.remove('li-active');
    allCat[i + 1].classList.add('li-active');
  });
  const el = <HTMLElement>document.querySelector('.content-cards');
  el.appendChild(root);
};
export default createCard;
