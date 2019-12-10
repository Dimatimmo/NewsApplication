document.addEventListener('DOMContentLoaded', function(){ 
  
});

const logout = document.getElementById('logout');
logout.addEventListener('click', logoutUser);

function logoutUser() {
  window.location.href = "../index.html";
}

const addBtn = document.getElementById('addRecord')
addBtn.addEventListener('click', showModal);

function showModal() {
  const modalWindow = document.getElementById('modal');
  console.log(modalWindow);
  modalWindow.style.display = 'block';
}

const cancelBtn = document.getElementById('cancel');
cancelBtn.addEventListener('click', cancelModal);

function cancelModal(e) {
  e.preventDefault();
  const modalWindow = document.getElementById('modal');
  modalWindow.style.display = 'none';
}

const titleArticle = document.getElementById('title-article');
const textArticle = document.getElementById('text-article');
const articleHolder = document.getElementById('articleHolder');
const addArticleBtn = document.getElementById('addArticleBtn');
let itemsArray = localStorage.getItem('articles') ? JSON.parse(localStorage.getItem('articles')) : [];

localStorage.setItem('articles', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('articles'));

function articleMaker(title, text ) {
  const articleHolder = document.getElementById('articleHolder');
  const article = 
  `
    <div class="article">
      <h1 class="articleTitle">${title}</h1>
      <p class="articleText">${text}</p>
      <input id="title-article-edit" type="text">
      <textarea rows="10" cols="45" name="text" id="text-article-edit" placeholder="Введите текст"></textarea>
      <a class="editArticle">Редактировать</a>
      <a class="deleteArticle">Удалить</a>
    </div>
  `
  articleHolder.insertAdjacentHTML('afterbegin', article);
  const deleteArticleBtn = document.querySelector('.deleteArticle');
  deleteArticleBtn.addEventListener('click',deleteArticle);
  const editArticleBtn = document.querySelector('.editArticle');
  editArticleBtn.addEventListener('click',editArticle);
}


addArticleBtn.addEventListener('click', function (e) {
  e.preventDefault();
  let temp = {};
  temp.title = titleArticle.value;
  temp.text = textArticle.value;
  let i = itemsArray.length
  itemsArray[i] = temp;

  localStorage.setItem('articles', JSON.stringify(itemsArray));
  articleMaker(titleArticle.value,textArticle.value );
  titleArticle.value = "";
  textArticle.value = "";
});

data.forEach((itemsArray) => {
  articleMaker(itemsArray.title, itemsArray.text);
});

function deleteArticle() {
  const singleArticle = this.parentNode;
  singleArticle.remove(singleArticle);
  JSON.parse(localStorage.getItem('articles'))
}

function editArticle() {
  const editButton = this;
  const singleArticle = this.parentNode; 
  const title = singleArticle.querySelector('.articleTitle');
  const text = singleArticle.querySelector('.articleText');
  let editTitleInput = singleArticle.querySelector('#title-article-edit');
  let editTextInput = singleArticle.querySelector('#text-article-edit');

  
  const containsClass = singleArticle.classList.contains('editMode');
  console.log(title.innerText);
  console.log(text.innerText);
  if (containsClass){
    title.innerText = editTitleInput.value;
    text.innerText = editTextInput.value;
    editButton.innerText = 'Редактировать';
  }else {
    titleArticle.value = title.innerText;
    textArticle.value = text.innerText;
    editTitleInput.value = titleArticle.value;
    editTextInput.value = titleArticle.value;
    
    editButton.innerText = 'Сохранить';
  }
  singleArticle.classList.toggle('editMode');
}

