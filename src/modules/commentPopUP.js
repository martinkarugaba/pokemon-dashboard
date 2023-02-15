import dataBase from './fetchData.js'; // eslint-disable-line
const showPop = (id) => {
  const dataRequired = dataBase.filter((data) => data.id === Number(id));
  const namePop = document.querySelector('#namePop');
  const imagePop = document.querySelector('#imagePop');
  const unhidden = document.querySelector('.popupsection');
  namePop.innerHTML = dataRequired[0].items[1]; // eslint-disable-line
  imagePop.src = `${dataRequired[0].items[0]}`; // eslint-disable-line
  unhidden.classList.toggle('hidden');
};

const hidePop = () => {
  const unhidden = document.querySelector('.popupsection');
  unhidden.classList.toggle('hidden');
};

const cross = document.querySelector('.cross');

cross.addEventListener('click', hidePop);

export default showPop;
