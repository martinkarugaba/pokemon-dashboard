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
        <p class="card__likes">Likes <span>(1)</span> <i class="fa-solid fa-heart"></i></p>
      </div>
      <button class="comment__button" id="${id}">Comment</button>
    </div>
  `;

  dataBase.push({
    id,
    items: [image, name],
  });
};

const fetchData = async () => {
  const response = await fetch(baseUrl);
  const data = await response.json();
  const { results } = data;
  // console.log(results)

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

export default dataBase;

fetchData();
