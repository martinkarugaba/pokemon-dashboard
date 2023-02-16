const id = 'Qtf3crftMlT7ljX0e5jU';
const baseUrl =
  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
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
  console.log(data);
  const likedItem = data.find((item) => item.item_id === name);
  console.log(likedItem);
  const likesContainer = document.querySelector(`.${name}`);
  likesContainer.innerHTML = likedItem.likes;
};

const addLike = async () => {
  const likeButtons = document.querySelectorAll('.like');
  likeButtons.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      let name = e.target.dataset.name;
      let like = { item_id: name, name };
      let item_id = like['item_id'];
      await sendLike(like);
      retrieveLike(item_id, name);
    });
  });
};

const fetchLikes = async () => {
  const response = await fetch(url);
  const data = await response.json();

  const cardsContainer = document.querySelector('.cards-container');
  const likes = cardsContainer.querySelectorAll(`span`);

  likes.forEach(like => {
    data.forEach(item => {
      if (item.item_id === like.dataset.name) {
        like.innerHTML = item.likes
      }
    })
  })
};

window.addEventListener('DOMContentLoaded', function () {
  fetchLikes();
});

export default addLike;
