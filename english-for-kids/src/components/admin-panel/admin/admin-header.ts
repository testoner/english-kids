import start from '../../..';

const adminHeader = (): void => {
  const html = `
  <div class="header-wrapper">
  <div class="header-content">
    <div class="admin-categories">Categories</div>
    <div class="admin-words">Words</div>
  </div>
  <div class="log-out">Log out</div>
  `;
  const root = document.createElement('header');
  root.setAttribute('class', 'header');
  root.innerHTML = html;
  document.body.appendChild(root);
  const exit = <HTMLElement>document.querySelector('.log-out');
  exit.addEventListener('click', () => {
    document.body.innerHTML = '';
    start();
  });
};
export default adminHeader;
