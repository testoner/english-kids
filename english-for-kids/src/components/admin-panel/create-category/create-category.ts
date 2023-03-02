import createAdminCatCard from '../admin-categories-cards/admin-cat-cards';

const createCategory = (): void => {
  const inputBtn = <HTMLInputElement>document.querySelector('.create-input');
  const crtBtnInput = <HTMLElement>document.querySelector('.btn-create-input');
  const val = inputBtn.value;
  crtBtnInput.addEventListener('click', async (): Promise<void> => {
    const requestURL = 'http://127.0.0.1:3000/api/categories';
    await fetch(requestURL)
      .then((res) => res.json())
      .then((data) => {
        const l = data.length + 1;
        const res = {
          id: l,
          name: val,
        };
        createAdminCatCard(res);
        fetch(requestURL, {
          method: 'POST',
          body: JSON.stringify(val),
          headers: {
            'Content-Type': 'application/json',
          },
        });
      });
  });
};
export default createCategory;
