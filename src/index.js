import './modules/fetchData.js';
import './styles/main.css';
import './styles/home.css';
import './modules/comment-post.js';

window.addEventListener('load', () => {
  const loader = document.querySelector('.loader-container');
  setTimeout(() => {
    loader.style.display = 'none';
  }, 3000);
});
