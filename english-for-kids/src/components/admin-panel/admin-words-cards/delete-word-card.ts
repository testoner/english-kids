const deleteWordCard = (src: string, id: number): void => {
  const exBtn = <HTMLElement>document.querySelector(`.admex-${src}`);
  const mainCard = <HTMLElement>document.querySelector(`.maincard-${src}`);
  exBtn.addEventListener('click', async (): Promise<void> => {
    const requestURL = `http://127.0.0.1:3000/api/items/${id}`;
    fetch(requestURL, { method: 'DELETE' });
    mainCard.remove();
  });
};
export default deleteWordCard;
