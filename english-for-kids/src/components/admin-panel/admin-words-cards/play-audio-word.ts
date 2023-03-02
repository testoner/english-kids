const playWord = (src: string): void => {
  const audio = new Audio();
  audio.src = src;
  audio.currentTime = 0;
  audio.play();
};
export default playWord;
