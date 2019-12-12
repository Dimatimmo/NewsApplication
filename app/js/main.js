

const adminEmail = 'admin@admin.com';
const btn = document.getElementById('btn');
btn.addEventListener('click', login)
const email = document.getElementById('email') ;
const password = document.getElementById('password');

function login(e) {

  e.preventDefault();
  if(email.value === adminEmail && password.value.length < 8 && password.value.length ) {
    window.location.href = "../pages/admin.html";
  } else {
    window.location.href = "../pages/user.html";
  }
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