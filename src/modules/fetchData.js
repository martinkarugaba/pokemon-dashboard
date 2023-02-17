import addLike from './addLike.js';
import showPop from './commentPopUP.js'; // eslint-disable-line
const baseUrl = 'https://pokeapi.co/api/v2/pokemon?limit=12&offset=0';
const cardsContainer = document.querySelector('.cards-container');

const dataBase = [];

const fetchImage = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  const {
    sprites: {
      other: {
        dream_world: { front_default: image },
      },
    },
    species: { name },
    id,
  } = data;

  cardsContainer.innerHTML += `
    <div class='card'>
      <img class="card__image" src=${image} alt=${name}/>
      <div class="title">
        <p class="name">${name}</p>
        <p class="card__likes">Likes <span data-name=${name} class="like-count ${name}">${0}</span> <i class="fa-solid fa-heart ${name} like" data-name=${name}></i></p>
      </div>
      <button class="comment__button" id="${id}">Comment</button>
    </div>
  `;

  addLike();
  // console.log(data)
  dataBase.push({
    id,
    items: [image, name],
    move: data.moves.slice(0,4)
  });
};

const fetchData = async () => {
  const response = await fetch(baseUrl);
  const data = await response.json();
  const { results } = data;

  results.forEach((item) => {
    const { url } = item;
    fetchImage(url);
  });

  cardsContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('comment__button')) {
      showPop(event.target.id);
    }
  });
};

fetchData();

export default dataBase;
