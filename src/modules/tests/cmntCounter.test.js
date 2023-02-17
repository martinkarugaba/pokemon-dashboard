
const commentCounter = require('../cmntCounter.js');


describe('Comments counter', () => {
  let  commentCount;
  it('should update the comment count when there are comments', () => {
    window.document.body.innerHTML = `
     <div id="commentCount"></div>
      <div class="commentsWow"></div>
      <div class="commentsWow"></div>
    `;
    commentCount = document.querySelector('#commentCount');
    commentCounter();
    expect(commentCount.innerHTML).toBe('(2)');
  });

  it('should update the comment count when there are no comments', () => {
    window.document.body.innerHTML = `
      <div id="commentCount"></div>
      <div class="commentsWow"></div>
      <div class="commentsWow"></div>
      <div class="commentsWow"></div>
    `;
    commentCount = document.querySelector('#commentCount');
    commentCounter();
    expect(commentCount.innerHTML).toBe('(3)');
  });
  it('should update the comment count when there are no comments', () => {
    window.document.body.innerHTML = `
      <div id="commentCount"></div>
      <div class="commentsWow"></div>
      <div class="commentsWow"></div>
      <div class="commentsWow"></div>
      <div class="commentsWow"></div>
    `;
    commentCount = document.querySelector('#commentCount');
    commentCounter();
    expect(commentCount.innerHTML).toBe('(4)');
  });
  it('should update the comment count when there are no comments', () => {
    window.document.body.innerHTML = `
      <div id="commentCount"></div>
    `;
    commentCount = document.querySelector('#commentCount');
    commentCounter();
    expect(commentCount.innerHTML).toBe('(0)');
  });
});
