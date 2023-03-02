import createCard from '../main-card/main-card';
import CardType from '../storeg/storeg';

const renderMain = async (): Promise<void> => {
  const html = `
  <div class="main-title">
    <h2 class="main-page-title">Train & Play</h2>
  </div>
  <div class="content-cards">
  </div>`;
  const root = document.createElement('main');
  root.setAttribute('class', 'main');
  root.innerHTML = html;
  document.body.appendChild(root);
  const res = await fetch('./images.json');
  const categories: CardType[] = await res.json();
  const leng = categories.length;
  for (let i = 0; i < leng; i += 1) {
    createCard(categories[i], i);
  }
};
export default renderMain;
