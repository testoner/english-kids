import renderAdminPage from './admin-page';

const checkForm = (): void => {
  const btnLogin = <HTMLButtonElement>document.querySelector('.btn-log');
  btnLogin.addEventListener('click', () => {
    const log = 'admin';
    const pass = 'admin';
    const inputLog = <HTMLInputElement>document.querySelector('.admin-log');
    const inputPass = <HTMLInputElement>document.querySelector('.admin-pass');
    const form = <HTMLElement>document.querySelector('.form-wrapper');
    if ((inputLog.value === log) && (inputPass.value === pass)) {
      renderAdminPage();
    } else {
      form.remove();
    }
    return false;
  });
};
export default checkForm;
