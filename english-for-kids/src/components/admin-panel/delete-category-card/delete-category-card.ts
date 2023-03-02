const deleteAdmCat = (id: number): void => {
  const exBtn = <HTMLElement>document.querySelector(`.admex-${id}`);
  const mainCard = <HTMLElement>document.querySelector(`.maincard-${id}`);
  exBtn.addEventListener('click', async (): Promise<void> => {
    const requestURL = `http://127.0.0.1:3000/api/categories/${id}`;
    await fetch(requestURL, { method: 'DELETE' });
    mainCard.remove();
  });
};
export default deleteAdmCat;
