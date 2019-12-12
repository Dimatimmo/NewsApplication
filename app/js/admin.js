const logout = document.querySelector('.logout');
const addBtn = document.querySelector('.addRecord');
const cancelBtn = document.querySelector('.cancel');
const titleArticle = document.querySelector('.title-article');
const textArticle = document.querySelector('.text-article');
const articleHolder = document.querySelector('.articleHolder');
const addArticleBtn = document.querySelector('.addArticleBtn');
const saveBtn = document.querySelector('.saveArticle');
let itemsArray = localStorage.getItem('articles') ? JSON.parse(localStorage.getItem('articles')) : [];
localStorage.setItem('articles', JSON.stringify(itemsArray));
const articleArray = JSON.parse(localStorage.getItem('articles'));
const modalWindow = document.querySelector('.modal-js');



eventBinding();

function eventBinding() {
  addArticleBtn.addEventListener('click', createArticle);
  logout.addEventListener('click', logoutUser);
  cancelBtn.addEventListener('click', cancelModal);
  addBtn.addEventListener('click', showModal);
}

function logoutUser() {
  window.location.href = "../index.html";
}

function showModal() {
  titleArticle.value = '';
  textArticle.value = '';
  modalWindow.style.display = 'block';
  saveBtn.style.display = 'none';
}

function cancelModal(e) {
  e.preventDefault();
  modalWindow.style.display = 'none';
}

function articleMaker(title, text, id ) {
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
  articleMakerEventBinding();
  modalWindow.style.display = 'none';
}

function articleMakerEventBinding () {
  const deleteArticleBtn = document.querySelector('.deleteArticle');
  deleteArticleBtn.addEventListener('click',deleteArticle);
  const editArticleBtn = document.querySelector('.editArticle');
  editArticleBtn.addEventListener('click',editArticle);
}

function createArticle(e) {
  e.preventDefault();
  let temp = {};
  temp.title = titleArticle.value;
  temp.text = textArticle.value;
  temp.id = Math.round((Math.random() * 10**7), 0);
  itemsArray.push(temp);
  localStorage.setItem('articles', JSON.stringify(itemsArray));
  articleMaker(titleArticle.value,textArticle.value, temp.id  );
}

function deleteArticle() {
  const id = this.parentNode.getAttribute('data-id');
  let idLnArray = itemsArray.findIndex(x => x.id == id);
  itemsArray.splice(idLnArray, 1);
  localStorage.setItem('articles', JSON.stringify(itemsArray)); 
  const singleArticle = this.parentNode;
  singleArticle.remove(singleArticle);

}

function editArticle() {
  const editButton = this;
  const singleArticle = this.parentNode; 
  const title = singleArticle.querySelector('.articleTitle');
  const text = singleArticle.querySelector('.articleText');
  const id = this.parentNode.getAttribute('data-id');
  let idLnArray = itemsArray.findIndex(x => x.id == id);
  modalWindow.style.display = 'block';
  addArticleBtn.style.display = 'none';
  saveBtn.style.display = 'block'
  titleArticle.value = title.innerText;
  textArticle.value = text.innerText;
  saveBtn.addEventListener('click', function() {
    itemsArray[idLnArray].title = titleArticle.value;
    itemsArray[idLnArray].text = textArticle.value;
    title.innerText = titleArticle.value;
    text.innerText = textArticle.value;
    localStorage.setItem('articles', JSON.stringify(itemsArray)); 
    modalWindow.style.display = 'none';
    addArticleBtn.style.display = 'block';
  }) 
}

articleArray.forEach((itemsArray) => {
  articleMaker(itemsArray.title, itemsArray.text, itemsArray.id);
});