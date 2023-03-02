import swipeCategory from '../swipe-category/swipe-category';

export default function changeCategory(category: string, i: number): void {
  const newCat = <HTMLElement>document.querySelector(`.menu-${i}`);
  const allCat = document.querySelectorAll('.li-item');
  let res = 0;
  for (let j = 0; j < allCat.length; j += 1) {
    if (allCat[j].classList.contains('li-active')) {
      res = j;
    }
  }
  if (res === 0) {
    allCat[0].classList.remove('li-active');
    newCat.classList.add('li-active');
    swipeCategory(category, i, 2);
  } else if (res !== i + 1) {
    allCat[res].classList.remove('li-active');
    newCat.classList.add('li-active');
    swipeCategory(category, i, 1);
  }
}
