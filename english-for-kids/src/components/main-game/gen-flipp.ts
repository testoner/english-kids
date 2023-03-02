const addFlipp = (): void => {
  const rotate = document.querySelectorAll('.card-rotate');
  const con = document.querySelectorAll('.card-container');
  const back = document.querySelectorAll('.game-back');
  for (let i = 0; i < con.length; i += 1) {
    rotate[i].addEventListener('click', () => {
      con[i].classList.add('flipped');
      back[i].addEventListener('mouseenter', () => {
        back[i].addEventListener('mouseleave', () => {
          con[i].classList.remove('flipped');
        });
      });
    });
  }
};
export default addFlipp;
