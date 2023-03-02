const switchFun = () => {
  const cardCond = document.querySelectorAll('.card-round');
  cardCond.forEach((el) => {
    el.classList.toggle('card-condition');
    el.classList.toggle('card-condition-active');
  });
};
const switchType = (): void => {
  const switchBtn = <HTMLElement>document.querySelector('.switch');
  switchBtn.addEventListener('mousedown', () => switchFun());
};
export default switchType;
