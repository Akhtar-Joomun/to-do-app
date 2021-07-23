let form = document.querySelector('.form');
let myInput = document.querySelector('.my-input');
let myUl = document.querySelector('.my-ul');



form.addEventListener('submit', (e) => {
    e.preventDefault();
    createList(myInput.value);
    myInput.value = '';
});

let createList = (x) => {
    let myHtml = `<div class="my-lists">
    <li class="my-list">${x}</li>
    <button onclick="deleteItem(this)" class="del-button">Delete</button>
</div>`
    myUl.insertAdjacentHTML('beforeend', myHtml);
}

let deleteItem = (x) => {
    x.parentElement.remove();  
}