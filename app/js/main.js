document.addEventListener('DOMContentLoaded', function(){ 
  const adminEmail = 'admin@admin.com';


  const btn = document.getElementById('btn');
  btn.addEventListener('click', login)


  function login(e) {
    const email = document.getElementById('email').value ;
    const password = document.getElementById('password').value;
    e.preventDefault();
    if(email === adminEmail && password.length < 8 && password.length ) {
      window.location.href = "../pages/admin.html";
    } else {
      window.location.href = "../pages/user.html";
    }
  }

});


function checkInputRequire() {
  if(document.getElementById('email').value != 0 && document.getElementById('password').value != 0) {
    btn.removeAttribute('disabled');
  } else {
    btn.setAttribute('disabled', 'disabled')
  }
}


