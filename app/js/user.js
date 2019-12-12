const logout = document.querySelector('.logout');
logout.addEventListener('click', logoutUser);

function logoutUser() {
  window.location.href = "../index.html";
}

const titleArticle = document.querySelector('.title-article');
const textArticle = document.querySelector('.text-article')
const articleHolder = document.querySelector('.articleHolder');
let itemsArray = localStorage.getItem('articles') ? JSON.parse(localStorage.getItem('articles')) : [];

localStorage.setItem('articles', JSON.stringify(itemsArray));
const articleArray = JSON.parse(localStorage.getItem('articles'));

function articleMakerUser(title, text, id ) {
  const article = 
  `
  <div class="article" data-id="${id}">
    <h1 class="articleTitle">${title}</h1>
    <p class="articleText userText">${text}</p>
</div>
  `
  articleHolder.insertAdjacentHTML('afterbegin', article);
}

articleArray.forEach((itemsArray) => {
  articleMakerUser(itemsArray.title, itemsArray.text);
});