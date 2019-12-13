

const adminEmail = 'admin@admin.com';
const btn = document.getElementById('btn');
btn.addEventListener('click', login)
const email = document.getElementById('email') ;
const password = document.getElementById('password');
const errorBlock = document.querySelector(".error-holder");
const error = document.querySelector(".error");

const minPasswordLength = 8;

function login(e) {
  e.preventDefault();
  if(email.value === adminEmail && password.value.length > minPasswordLength && password.value.length ) {
    error.parentNode.removeChild(error);
    window.location.href = "../pages/admin.html";
  } else {
    errorBlock.style.opacity = 1;
    setTimeout(errorHide, 2000)
  }

  if(email.value != adminEmail && password.value.length > minPasswordLength && password.value.length){
    error.parentNode.removeChild(error);
    window.location.href = "../pages/user.html";
  } else {
    errorBlock.style.opacity = 1;
    setTimeout(errorHide, 2000)
  }
}

function errorHide (){
  errorBlock.style.opacity = 0;
}



function checkInputRequire() {
  if(document.getElementById('email').value != 0 && document.getElementById('password').value != 0) {
    btn.removeAttribute('disabled');
  } else {
    btn.setAttribute('disabled', 'disabled')
  }
}


function placeholderClear() {
  const labelEmail =  document.querySelector('.labelEmail');
  const labelPswrd = document.querySelector('.labelPswrd');
  
  
}

placeholderClear();