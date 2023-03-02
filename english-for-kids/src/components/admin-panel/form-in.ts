import checkForm from './check-form';

const renderFormIn = (): void => {
  const html = `
    <div class="form-in">
      <form>
      <input type="text" value="admin" class="admin-log">
      <input type="password" value="admin" class="admin-pass">
      <button class="btn-log" type="button">Log in</button>
      </form>
    </div>
  `;
  const root = document.createElement('div');
  root.setAttribute('class', 'form-wrapper');
  root.innerHTML = html;
  document.body.appendChild(root);
  root.addEventListener('click', (event) => {
    const target = <HTMLElement>event.target;
    if (target.classList.contains('form-wrapper')) root.remove();
  });
  checkForm();
};
export default renderFormIn;
