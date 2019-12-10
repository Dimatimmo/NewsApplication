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

function articleMaker(title, text, id ) {
  const articleHolder = document.getElementById('articleHolder');
  const article = 
  `
    <div class="article" data-id="${id}">
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
  const modalWindow = document.getElementById('modal');
  modalWindow.style.display = 'none';
}


addArticleBtn.addEventListener('click', function (e) {
  e.preventDefault();
  let temp = {};
  temp.title = titleArticle.value;
  temp.text = textArticle.value;
  temp.id = Math.round((Math.random() * 10**7), 0);
  let i = itemsArray.length
  itemsArray[i] = temp;

  localStorage.setItem('articles', JSON.stringify(itemsArray));
  articleMaker(titleArticle.value,textArticle.value, temp.id  );
  titleArticle.value = "";
  textArticle.value = "";
});

data.forEach((itemsArray) => {
  articleMaker(itemsArray.title, itemsArray.text, itemsArray.id);
});

function deleteArticle(e) {
  const id = this.parentNode.getAttribute('data-id');
  for (let i = 0; i < itemsArray.length ; i++){
    if(id == itemsArray[i]['id']){
      itemsArray.splice(i, 1);
      localStorage.setItem('articles', JSON.stringify(itemsArray)); 
      const singleArticle = this.parentNode;
      singleArticle.remove(singleArticle); break
    }
  }
}

function editArticle() {
  const editButton = this;
  const singleArticle = this.parentNode; 
  const title = singleArticle.querySelector('.articleTitle');
  const text = singleArticle.querySelector('.articleText');
  let editTitleInput = singleArticle.querySelector('#title-article-edit');
  let editTextInput = singleArticle.querySelector('#text-article-edit');

  
  const containsClass = singleArticle.classList.contains('editMode');
  if (containsClass){
    const id = this.parentNode.getAttribute('data-id');
    for (let i = 0; i < itemsArray.length ; i++){
      if(id == itemsArray[i]['id']){
        title.innerText = editTitleInput.value;
        text.innerText = editTextInput.value;
        itemsArray[i].title = editTitleInput.value;
        itemsArray[i].text = editTextInput.value;
        localStorage.setItem('articles', JSON.stringify(itemsArray));  break
      }
    }
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

