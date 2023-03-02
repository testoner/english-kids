import playAudio from '../game-card/play-audio';
import endGame from './end-game';
import musicRep from './start-music';

const nextStep = async (arr: number[], category: string, i: number, res: number): Promise<void> => {
  const collection = document.querySelectorAll('.card-container-info');
  const btn = <HTMLElement>document.querySelector('.btn-game');
  if (i === 0) {
    musicRep(arr[i], category);
  } else {
    setTimeout(() => { musicRep(arr[i], category); }, 1000);
  }
  btn.addEventListener('click', () => musicRep(arr[i], category), { once: true });
  for (let j = 0; j < collection.length; j += 1) {
    if (arr[i] !== j) {
      collection[j].addEventListener('click', () => {
        playAudio('../fail.mp3');
        res -= 1;
      });
    }
  }
  collection[arr[i]].addEventListener('click', () => {
    playAudio('../suc.mp3');
    collection.forEach((el) => {
      el.outerHTML = el.outerHTML;
    });
    if (i === collection.length - 1) {
      endGame(res, collection.length);
    } else {
      nextStep(arr, category, i + 1, res + 1);
    }
  });
};
export default nextStep;
