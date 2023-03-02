const checkStatus = (): void => {
  const switchBtn = <HTMLInputElement>document.querySelector('.switch-input');
  const cont = document.querySelectorAll('.card-info');
  const back = document.querySelectorAll('.card-background');
  const card = document.querySelectorAll('.card-container-info');
  const gameBtn = <HTMLElement>document.querySelector('.start-btn');
  const res = switchBtn.checked;
  if (res === true) {
    cont.forEach((el) => {
      el.classList.add('disabled');
    });
    back.forEach((el) => {
      el.classList.add('card-img-active');
    });
    card.forEach((el) => {
      el.outerHTML = el.outerHTML;
    });
    gameBtn.classList.remove('disabled');
  }
};
export default checkStatus;
