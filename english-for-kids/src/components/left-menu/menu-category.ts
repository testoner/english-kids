import changeCategory from './change-category';

const createCategory = (name: string, i: number): void => {
  const html = `
  ${name}
  `;
  const root = document.createElement('li');
  root.setAttribute('class', `menu-${i} li-item`);
  root.innerHTML = html;
  const el = <HTMLElement>document.querySelector('.menu-burger');
  root.addEventListener('click', () => changeCategory(name, i));
  el.appendChild(root);
};
export default createCategory;
