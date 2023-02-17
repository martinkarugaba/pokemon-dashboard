const itemCounter = () => {
  const itemsCount = document.querySelector('.items-count');
  const items = document.querySelectorAll('.card');

  itemsCount.innerHTML = `(${items.length})`;
};

module.exports = itemCounter;