import dataBase from './fetchData.js'; // eslint-disable-line
import getComments from './comment-post.js';

const showPop = async (id) => {
  let move;
  const dataRequired = dataBase.filter((data) => data.id === Number(id));
  move=[...dataRequired[0].move]
  
  const namePop = document.querySelector('#namePop');
  const imagePop = document.querySelector('#imagePop');
  imagePop.src = '';
  const specialMoves = document.querySelector('.specialmoves');

  move.forEach(element => {
    console.log(element.move.name)
    specialMoves.innerHTML +=`
      <li><span>${element.move.name}</span></li>
    `
  });
  const unhidden = document.querySelector('.popupsection');
  const commentPostId = document.querySelector('#commentPostId');
  const name = document.querySelector('#name');
  const comment = document.querySelector('#comment');
  name.value = '';
  comment.value = '';

  //  this eslint is not working for sure i had destructured it then too
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
  const specialMoves = document.querySelector('.specialmoves');
  specialMoves.innerHTML=''
  unhidden.classList.toggle('hidden');
};

const cross = document.querySelector('.cross');
const popupsectionBackground = document.querySelector('.popupsection');
const upfront = document.querySelector('.upfront');

upfront.addEventListener('click', (event) => {
  event.stopPropagation();
});
popupsectionBackground.addEventListener('click', hidePop);

cross.addEventListener('click', hidePop);
export default showPop;
