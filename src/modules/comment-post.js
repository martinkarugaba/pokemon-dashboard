const id = '01bPQut4VIty6lAPGuX9';
const baseUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${id}/comments`;
const commentCounter = require('./cmntCounter.js');

const postComments = async (name, comment1, id) => {
  await fetch(baseUrl, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      username: name,
      comment: comment1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

const getComments = async (querryid) => {
  const response = await fetch(`${baseUrl}?item_id=${querryid}`);
  const data = await response.json();
  const commentSection = document.querySelector('.commentSection');
  commentSection.innerHTML = '';

  // Check if data is an array
  if (!Array.isArray(data)) {
    commentSection.innerHTML = '<p class="nocomment">there is no comments yet</p>';
    return;
  }

  data.forEach((element) => {
    commentSection.innerHTML += `
    <li class="commentsWow">
      <span class="date">${element.creation_date}</span>
      <span class="usr-name">${element.username}</span> :
      <span class="cmnt">${element.comment}<span>
    </li>
    `;
  });

  await commentCounter();
};

const formSubmition = async () => {
  // e.preventDefault();
  const commentid = document.querySelector('#commentPostId');
  const name = document.querySelector('#name');
  const comment = document.querySelector('#comment');
  const submitBtn = document.querySelector('.submit');
  const error = document.querySelector('.error');

  if (
    name.value.length > 15
    || name.value.trim().length === 0
    || comment.value.trim().length === 0
    || comment.value.length > 85
  ) {
    error.innerHTML = 'please submit valid comment or name';
    submitBtn.disabled = false;
    submitBtn.innerText = 'Try again';
    setInterval(() => window.location.reload(), 2000);
    return;
  }
  submitBtn.disabled = true;
  submitBtn.innerText = 'Posting...';
  await postComments(name.value, comment.value, commentid.value);
  name.value = '';
  comment.value = '';
  submitBtn.disabled = false;
  submitBtn.innerText = 'submit';
  getComments(commentid.value);
};

const from = document.querySelector('.Add-comment');

from.addEventListener('submit', (e) => {
  e.preventDefault();
  formSubmition();
});

export default getComments;