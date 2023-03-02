import createWordCards from '../admin-words-cards/admin-words-card';
import renderAdminMain from '../admin/admin-main';

const renderWordrMain = async (): Promise<void> => {
  const html = `
    <div class="content-cards">
    </div>
    <div class="create-card">
      <div class="main-card">
      <div class="card-cont-admin">
      <div class="card-buttons-create">
          <input type="text" class="create-input">
          <div class="btn-create-input">Create card</div>
        </div>
      </div>
      </div>
    </div>
  `;
  const requestURL = 'http://127.0.0.1:3000/api/items';
  const root = document.createElement('main');
  root.setAttribute('class', 'main');
  root.innerHTML = html;
  document.body.appendChild(root);
  await fetch(requestURL)
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < data.length; i += 1) createWordCards(data[i]);
    });
  const cat = <HTMLElement>document.querySelector('.admin-categories');
  const main = <HTMLElement>document.querySelector('.main');
  cat.addEventListener('click', () => {
    main.remove();
    renderAdminMain();
  }, { once: true });
};
export default renderWordrMain;
