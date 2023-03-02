import renderFormIn from './form-in';

const buttonIn = async (): Promise<void> => {
  const html = `
    <button class="log-in">
      Log in
    </button>
  `;
  const root = document.createElement('div');
  root.setAttribute('class', 'btn-login');
  root.innerHTML = html;
  const el = <HTMLElement>document.querySelector('.menu');
  el.after(root);
  root.addEventListener('click', () => renderFormIn());
};
export default buttonIn;
