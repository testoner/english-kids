import CardType from '../storeg/storeg';
import playAudio from './play-audio';

const gameCard = async (data: CardType, i: number): Promise<void> => {
  const html = `
  <div class='game-card'>
    <div class="game-front card-audio-${i}">
      <div class="card-img card-background" style="background-image: url(../${data.category}/${i}.jpg);">
      </div>
      <div class="card-info card-cont-${i}">
        <h2 class="card-title">${data.nameEng[i]}</h2>
        <div class="card-condition card-round"></div>
        <img src="./rotate.png" class="card-rotate" width="20px">
      </div>
    </div>
    <div class="game-back game-back-${i}">
      <div class="card-img" style="background-image: url(../${data.category}/${i}.jpg);"></div>
      <div class="card-cont">
        <h2 class="card-title">${data.nameRus[i]}</h2>
        <div class="card-condition card-round"></div>
      </div>
    </div>
  </div>
  `;
  const root = document.createElement('div');
  root.setAttribute('class', `card-container card-container-info con-${i}`);
  root.innerHTML = html;
  const page = <HTMLElement>document.querySelector('.main-cards');
  page.appendChild(root);
  const url = `../${data.category}/${i}.mp3`;
  const cardAudio = <HTMLElement>document.querySelector(`.card-audio-${i}`);
  cardAudio.addEventListener('click', () => playAudio(url));
};
export default gameCard;
