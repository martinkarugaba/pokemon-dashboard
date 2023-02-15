const baseUrl = 'https://pokeapi.co/api/v2/pokemon?limit=12&offset=0';
const cardsContainer = document.querySelector('.cards-container')

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
      <p class="name">${name}</p>
    </div>
  `
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
