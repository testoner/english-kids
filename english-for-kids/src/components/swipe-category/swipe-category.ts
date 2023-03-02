import checkStatus from '../main-game/check-status';
import typeGame from '../main-game/game-type';
import renderGame from '../main-game/main-game';
import startGame from '../start-game/start-game';
import CardType from '../storeg/storeg';

async function firstType(i: number, category: string): Promise<void> {
  const mainGame = <HTMLElement>document.querySelector('.main-game');
  const menu = <HTMLElement>document.querySelector('.left-menu');
  const menuBlock = <HTMLElement>document.querySelector('.block-active-menu');
  mainGame.remove();
  const res = await fetch('./images.json');
  const categories: CardType[] = await res.json();
  await renderGame(categories[i]);
  checkStatus();
  typeGame();
  startGame(category);
  menu.classList.remove('left-menu-active');
  menuBlock.classList.add('disabled');
}
async function secondType(i: number, category: string): Promise<void> {
  const menu = <HTMLElement>document.querySelector('.left-menu');
  const mainPage = <HTMLElement>document.querySelector('.main');
  const menuBlock = <HTMLElement>document.querySelector('.block-active-menu');
  mainPage.classList.add('disabled');
  const res = await fetch('./images.json');
  const categories: CardType[] = await res.json();
  await renderGame(categories[i]);
  checkStatus();
  typeGame();
  startGame(category);
  menu.classList.remove('left-menu-active');
  menuBlock.classList.add('disabled');
}
function thirdType() {
  const menu = <HTMLElement>document.querySelector('.left-menu');
  const mainGame = <HTMLElement>document.querySelector('.main-game');
  const menuBlock = <HTMLElement>document.querySelector('.block-active-menu');
  mainGame.remove();
  const mainPage = <HTMLElement>document.querySelector('.main');
  mainPage.classList.remove('disabled');
  menu.classList.remove('left-menu-active');
  menuBlock.classList.add('disabled');
}
const swipeCategory = (category: string, i: number, type: number): void => {
  if (type === 1) {
    firstType(i, category);
  }
  if (type === 2) {
    secondType(i, category);
  }
  if (type === 3) {
    thirdType();
  }
};
export default swipeCategory;
