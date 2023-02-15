const baseUrl = 'https://pokeapi.co/api/v2/pokemon?limit=12&offset=0';
const cardsContainer = document.querySelector('.cards-container');

const fetchImage = async (url) => {
  const response = await fetch(url);
  const data = await response.json();

  const {
    sprites: {
      other: {
        dream_world: { front_default },
      },
    },
    species: { name },
  } = data;

  cardsContainer.innerHTML += `
    <div class='card'>
      <img class="card__image" src=${front_default} alt=${name}/>
      <div class="title">
        <p class="name">${name}</p>
        <p class="card__likes">Likes <span>(1)</span> <i class="fa-solid fa-heart"></i></p>
      </div>
      <button class="comment__button">Comment</button>
    </div>
  `;
};

export const fetchData = async () => {
  const response = await fetch(baseUrl);
  const data = await response.json();
  const { results } = data;

  const info = results.forEach((item) => {
    const { url } = item;
    fetchImage(url);
  });
};

fetchData();
