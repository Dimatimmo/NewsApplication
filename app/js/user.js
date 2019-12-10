const logout = document.getElementById('logout');
logout.addEventListener('click', logoutUser);

function logoutUser() {
  window.location.href = "../index.html";
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
    <div>
      <h1>${title}</h1>
      <p>${text}</p>
    </div>
  `
  articleHolder.insertAdjacentHTML('beforeend', article);
}

data.forEach((itemsArray) => {
  articleMaker(itemsArray.title, itemsArray.text);
});