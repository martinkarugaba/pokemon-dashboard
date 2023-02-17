import dataBase from './fetchData.js'; // eslint-disable-line
import getComments from './comment-post.js';

const showPop = async (id) => {
  const dataRequired = dataBase.filter((data) => data.id === Number(id));
  const namePop = document.querySelector('#namePop');
  const imagePop = document.querySelector('#imagePop');
  imagePop.src = '';
  const unhidden = document.querySelector('.popupsection');
  const commentPostId = document.querySelector('#commentPostId');
  const name = document.querySelector('#name');
  const comment = document.querySelector('#comment');
  name.value = '';
  comment.value = '';
  commentPostId.value = dataRequired[0].items[1]; // eslint-disable-line
  namePop.innerHTML = dataRequired[0].items[1]; // eslint-disable-line
  imagePop.src = `${dataRequired[0].items[0]}`; // eslint-disable-line
  unhidden.classList.toggle('hidden');
  await getComments(commentPostId.value);
};

const hidePop = () => {
  const unhidden = document.querySelector('.popupsection');
  const commentCount = document.querySelector('#commentCount');
  commentCount.innerHTML = '(0)';
  unhidden.classList.toggle('hidden');
};

const cross = document.querySelector('.cross');
const popupsectionBackground = document.querySelector('.popupsection');

cross.addEventListener('click', hidePop);
popupsectionBackground.addEventListener('click', hidePop);

export default showPop;
