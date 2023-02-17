const itemCounter = require('../itemsCount.js');

describe('item counter', () => {
  let itemsCount;
  test('item count should be two if there are two items', () => {
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

  test('item count should be zero if there is no item', () => {
    window.document.body.innerHTML = `
     <div class="items-count">
     </div>
    `;
    itemsCount = document.querySelector('.items-count');
    itemCounter();
    expect(itemsCount.innerHTML).toBe('(0)');
  });
});
