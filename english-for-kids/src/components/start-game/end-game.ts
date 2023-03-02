import playAudio from '../game-card/play-audio';

const endGame = (res: number, leng: number): void => {
  const html = `
    <div class="end-wrapper">
      <div class="suc">
        <img src="../suc.png" alt="win" width="300px">
        <p>You win</p>
      </div>
      <div class="fail">
        <img src="../fail.png" alt="fail" width="300px">
        <p>You fail. ${leng - 1 - res} wrongs</p>
      </div>
    </div>
  `;
  const root = document.createElement('div');
  root.setAttribute('class', 'end');
  root.innerHTML = html;
  const head = <HTMLElement>document.querySelector('.header');
  const game = <HTMLElement>document.querySelector('.main-game');
  const main = <HTMLElement>document.querySelector('.main');
  game.remove();
  head.after(root);
  const suc = <HTMLElement>document.querySelector('.suc');
  const fail = <HTMLElement>document.querySelector('.fail');
  if (res === leng - 1) {
    playAudio('../nice.mp3');
    fail.classList.add('disabled');
  } else {
    playAudio('../err.mp3');
    suc.classList.add('disabled');
  }
  setTimeout(() => {
    root.remove();
    main.classList.remove('disabled');
  }, 5000);
};

export default endGame;
