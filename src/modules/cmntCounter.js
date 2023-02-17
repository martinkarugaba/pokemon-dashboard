const commentCounter = () => {
  const comments = document.querySelectorAll('.commentsWow');
  const commentCount = document.querySelector('#commentCount');
  commentCount.innerHTML = `(${comments.length})`;
};

module.exports = commentCounter;