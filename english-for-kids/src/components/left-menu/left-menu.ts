import CardType from '../storeg/storeg';
import manePage from './change-main';
import createCategory from './menu-category';

const renderLMenu = async (): Promise<void> => {
  const html = `
    <img class='menu-ex' src="./ex.png" alt="ex" width="30px">
    <ul class="menu-burger">
      <li class="menu-main li-active li-item">Main page</li>
    </ul>
  `;
  const root = document.createElement('div');
  root.setAttribute('class', 'left-menu');
  root.innerHTML = html;
  const el = <HTMLElement>document.querySelector('.block-menu');
  el.appendChild(root);
  const res = await fetch('./images.json');
  const categories: CardType[] = await res.json();
  const leng = categories.length;
  for (let i = 0; i < leng; i += 1) {
    createCategory(categories[i].category, i);
  }
  manePage();
  const exBtn = <HTMLElement>document.querySelector('.menu-ex');
  const menuBtn = <HTMLElement>document.querySelector('.menu-button');
  const menuBlock = <HTMLElement>document.querySelector('.block-active-menu');
  function swipe() {
    root.classList.toggle('left-menu-active');
  }
  exBtn.addEventListener('click', () => {
    swipe();
    menuBlock.classList.add('disabled');
  });
  menuBtn.addEventListener('click', () => {
    swipe();
    menuBlock.classList.remove('disabled');
  });
  menuBlock.addEventListener('click', () => {
    swipe();
    menuBlock.classList.add('disabled');
  });
};
export default renderLMenu;
