import deleteAdmCat from '../delete-category-card/delete-category-card';
import CatCard from './admi-cat-interface';

const createAdminCatCard = (object: CatCard): void => {
  const html = `
    <div class="card-cont-admin">
    <div class="admin-ex admex-${object.id}">
      <img src="../ex.png" alt="ex" width="20px">
    </div>
     <h2 class="card-title-admin">${object.name}</h2>
     <div class="card-buttons">
      <div class="card-upd">Update</div>
      <div class="card-words">Words</div>
     </div>
    </div>
  </div>`;
  const root = document.createElement('div');
  root.setAttribute('class', `main-card maincard-${object.id}`);
  root.innerHTML = html;
  const el = <HTMLElement>document.querySelector('.content-cards');
  el.appendChild(root);
  deleteAdmCat(object.id);
};
export default createAdminCatCard;
