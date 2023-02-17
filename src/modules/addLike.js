const id = 'Qtf3crftMlT7ljX0e5jU';
const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const url = `${baseUrl}apps/${id}/likes/`;

const sendLike = async (like) => {
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify(like),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

const retrieveLike = async (name) => {
  const response = await fetch(url);
  const data = await response.json();
  const likedItem = data.find((item) => item.item_id === name);
  const likesContainer = document.querySelector(`.${name}`);
  const heart = document.querySelector(`.${name}.like`);
  likesContainer.innerHTML = likedItem.likes;
  heart.style.color = 'rgba(244, 176, 176, 0.708)'
};

const addLike = async () => {
  const likeButtons = document.querySelectorAll('.like');
  likeButtons.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      const { name } = e.target.dataset;
      const like = { item_id: name, name };
      const { item_id: id } = like;
      const heart = document.querySelector(`.${name}.like`);
      heart.style.color = 'red'
      await sendLike(like);
      retrieveLike(id, name);      
    });
  });
};

const fetchLikes = async () => {
  const response = await fetch(url);
  const data = await response.json();

  const cardsContainer = document.querySelector('.cards-container');
  const likes = cardsContainer.querySelectorAll('span');

  likes.forEach((like) => {
    data.forEach((item) => {
      if (item.item_id === like.dataset.name) {
        like.innerHTML = item.likes;
      }
    });
  });
};

window.addEventListener('DOMContentLoaded', () => {
  fetchLikes();
});

export default addLike;
