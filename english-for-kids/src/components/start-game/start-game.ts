import nextStep from './next-step';

const startGame = async (category: string): Promise<void> => {
  const btn = <HTMLElement>document.querySelector('.btn-game');
  btn.addEventListener('click', () => {
    btn.innerHTML = 'Repeat';
    const arr = [0, 1, 2, 3, 4, 5, 6, 7];
    const res = 0;
    arr.sort(() => Math.random() - 0.5);
    nextStep(arr, category, 0, res);
  }, { once: true });
};
export default startGame;
