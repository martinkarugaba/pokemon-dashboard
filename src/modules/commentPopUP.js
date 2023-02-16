import dataBase from './fetchData.js'; // eslint-disable-line
import getComments from './comment-post.js';
const showPop = async (id) => {
  const dataRequired = dataBase.filter((data) => data.id === Number(id));
  const namePop = document.querySelector('#namePop');
  const imagePop = document.querySelector('#imagePop');
  imagePop.src = ""
  const unhidden = document.querySelector('.popupsection');
  let commentPostId = document.querySelector('#commentPostId')
  let name = document.querySelector('#name');
  let comment = document.querySelector('#comment')
  name.value = ""
  comment.value = ""
  commentPostId.value = dataRequired[0].items[1];  
  console.log(commentPostId.value)
  namePop.innerHTML = dataRequired[0].items[1]; // eslint-disable-line
  imagePop.src = `${dataRequired[0].items[0]}`; // eslint-disable-line
  unhidden.classList.toggle('hidden');
  await getComments(commentPostId.value)
};

const hidePop = () => {
  const unhidden = document.querySelector('.popupsection');
  unhidden.classList.toggle('hidden');
};

const cross = document.querySelector('.cross');

cross.addEventListener('click', hidePop);

export default showPop;
