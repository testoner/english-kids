import deleteWordCard from './delete-word-card';
import WordsCard from './interface-words-cards';
import playWord from './play-audio-word';

const createWordCards = (object: WordsCard): void => {
  const requestURL = `http://127.0.0.1:3000/api/categories/${object.categoryId}`;
  fetch(requestURL)
    .then((res) => res.json())
    .then((data) => {
      const cat = data.name;
      const html = `
         <div class="card-cont-admin">
    <div class="admin-ex admex-${object.categoryId}-${object.image - 1}">
      <img src="../ex.png" alt="ex" width="20px">
    </div>
     <h2 class="card-title-admin">${object.name}</h2>
     <div class="card-audio card-audio-${object.categoryId}-${object.image - 1}">Play ${object.name}.mp3</div>
     <div class="word-img">
      <img src="../${cat}/${object.image - 1}.jpg" alt="${object.name}" width="100px" class="card-word-img">
     </div>
     <div class="card-buttons">
      <div class="card-upd">Update</div>
     </div>
    </div>
  </div>`;
      const root = document.createElement('div');
      root.setAttribute('class', `main-card maincard-${object.categoryId}-${object.image - 1}`);
      root.innerHTML = html;
      const el = <HTMLElement>document.querySelector('.content-cards');
      el.appendChild(root);
      const mpWord = <HTMLElement>document.querySelector(`.card-audio-${object.categoryId}-${object.image - 1}`);
      mpWord.addEventListener('click', () => playWord(`../${cat}/${object.image - 1}.mp3`));
      deleteWordCard(`${object.categoryId}-${object.image - 1}`, object.image * object.categoryId);
    });
};
export default createWordCards;
