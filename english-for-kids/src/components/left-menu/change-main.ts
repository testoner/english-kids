import swipeCategory from '../swipe-category/swipe-category';

export default function manePage(): void {
  const menu = <HTMLElement>document.querySelector('.menu-main');
  const allCat = document.querySelectorAll('.li-item');
  let res = 0;
  menu.addEventListener('click', () => {
    for (let j = 0; j < allCat.length; j += 1) {
      if (allCat[j].classList.contains('li-active')) {
        res = j;
      }
    }
    if (res !== 0) {
      allCat[res].classList.remove('li-active');
      menu.classList.add('li-active');
      swipeCategory('', res, 3);
    }
  });
}
