const commentData = [
  {
    pokeImage: 'A',
    alt: 'A',
    pokemonName: 'A',
    pokemonType: '1 2 3 4',
  },
  {
    pokeImage: 'B',
    alt: 'B',
    pokemonName: 'B',
    pokemonType: '1 2 3 4',
  },
  {
    pokeImage: 'C',
    alt: 'C',
    pokemonName: 'C',
    pokemonType: '1 2 3 4',
  },
  {
    pokeImage: 'D',
    alt: 'D',
    pokemonName: 'D',
    pokemonType: '1 2 3 4',
  },
  {
    pokeImage: 'E',
    alt: 'E',
    pokemonName: 'E',
    pokemonType: '1 2 3 4',
  },
  {
    pokeImage: 'F',
    alt: 'F',
    pokemonName: 'F',
    pokemonType: '1 2 3 4',
  },
];

const popUpMAker = () => {
  // const commentBtn = document.querySelectorAll('.commentBtn');
  commentData.forEach((data, index) => {
    //  this is left beacause i don't know the data type yet
    // so i don't want to waste energy on it
    console.log(index, data);
  });
};

module.exports = popUpMAker;