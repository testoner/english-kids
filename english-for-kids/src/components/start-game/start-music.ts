import playAudio from '../game-card/play-audio';

const musicRep = (i: number, category: string): void => {
  const url = `../${category}/${i}.mp3`;
  playAudio(url);
};
export default musicRep;
