const typeGame = (): void => {
  const btn = <HTMLElement>document.querySelector('.switch');
  btn.addEventListener('mousedown', () => {
    const gameBtn = <HTMLElement>document.querySelector('.start-btn');
    const cont = document.querySelectorAll('.card-info');
    const back = document.querySelectorAll('.card-background');
    const card = document.querySelectorAll('.card-container-info');
    cont.forEach((el) => {
      el.classList.toggle('disabled');
    });
    back.forEach((el) => {
      el.classList.toggle('card-img-active');
    });
    card.forEach((el) => {
      el.outerHTML = el.outerHTML;
    });
    gameBtn.classList.toggle('disabled');
  });
};
export default typeGame;
