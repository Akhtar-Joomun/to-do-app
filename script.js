const form = document.querySelector('.form');
const myInput = document.querySelector('.my-input');
const myUl = document.querySelector('.my-ul');

const createList = (x) => {
  const myHtml = `<div class="my-lists">
      <li class="my-list">${x}</li>
      <button onclick="deleteItem(this)" class="del-button">Delete</button>
  </div>`;
  myUl.insertAdjacentHTML('beforeend', myHtml);
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  createList(myInput.value);
  myInput.value = '';
});

// eslint-disable-next-line
const deleteItem = (x) => {
  x.parentElement.remove();
};
