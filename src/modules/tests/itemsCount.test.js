const itemCounter = require('../itemsCount.js');

describe('item counter', () => {
  let itemsCount;
  test('should update the item count with the number of items in the ', () => {
    window.document.body.innerHTML = `
     <div class="items-count">
     </div>
      <div class="card"></div>
      <div class="card"></div>
    `;
    itemsCount = document.querySelector('.items-count');
    itemCounter();
    expect(itemsCount.innerHTML).toBe('(2)');
  });
});
