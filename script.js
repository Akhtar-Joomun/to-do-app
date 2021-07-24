const myInput = document.querySelector('.my-input');
const myUl = document.querySelector('.my-ul');
const createItem = document.querySelector('.create-item');

const createList = (x) => {
  const myHtml = `<div class="my-lists">
      <li class="my-list">${x}</li>
      <button onclick="deleteItem(this)" class="del-button">Delete</button>
  </div>`;
  myUl.insertAdjacentHTML('beforeend', myHtml);
  myInput.value = '';
};

createItem.addEventListener('click', (e) => {
  e.preventDefault();
  createList(myInput.value);
});

// eslint-disable-next-line
const deleteItem = (x) => {
  x.parentElement.remove();
};
