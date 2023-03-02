import buttonIn from '../admin-panel/admin-in';
import renderLMenu from '../left-menu/left-menu';

const renderHeader = (): void => {
  const html = `<div class="header-wrapper">
  <div class="menu">
    <img src="../menu-button.png" alt="menu" width="50px" class="menu-button" pointer>
    <div class="block-menu">
    <div class="block-active-menu disabled"></div>
    </div>
  </div>
  <div>
    <div class="switch">
      <label class="header__switch__round">
        <input type="checkbox" class="switch-input">
        <span class="header__switch__slider round"></span>
      </label>
    </div>
  </div>
  </div>`;
  const root = document.createElement('header');
  root.setAttribute('class', 'header');
  root.innerHTML = html;
  document.body.appendChild(root);
  renderLMenu();
  buttonIn();
};
export default renderHeader;
