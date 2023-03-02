import './styles.scss';
import renderFooter from './components/footer/footer';
import renderHeader from './components/header/header';
import renderMain from './components/main-page/main';
import switchType from './components/switch/switch-type';

const start = async (): Promise<void> => {
  await renderHeader();
  await renderMain();
  await renderFooter();
  await switchType();
};
export default start;
start();
