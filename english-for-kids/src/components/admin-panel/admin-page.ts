import renderAdminMain from './admin/admin-main';
import adminHeader from './admin/admin-header';

const renderAdminPage = (): void => {
  document.body.innerHTML = '';
  adminHeader();
  renderAdminMain();
};
export default renderAdminPage;
