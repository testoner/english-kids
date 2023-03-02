import createAdminCatCard from '../admin-categories-cards/admin-cat-cards';
import renderWordrMain from '../admin-word-main/admin-word-main';
import createCategory from '../create-category/create-category';

const renderAdminMain = async (): Promise<void> => {
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
  const requestURL = 'http://127.0.0.1:3000/api/categories';
  const root = document.createElement('main');
  root.setAttribute('class', 'main');
  root.innerHTML = html;
  document.body.appendChild(root);
  await fetch(requestURL)
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < data.length; i += 1) createAdminCatCard(data[i]);
    });
  createCategory();
  const word = <HTMLElement>document.querySelector('.admin-words');
  word.addEventListener('click', () => {
    root.remove();
    renderWordrMain();
  }, { once: true });
};
export default renderAdminMain;
