document.addEventListener('DOMContentLoaded', function(){ 
  const adminEmail = 'admin@admin.com';


  const btn = document.getElementById('btn');
  btn.addEventListener('click', login)


  function login(e) {
    const emailInput = document.getElementById('email').value ;
    const passwordInput = document.getElementById('password').value;
    e.preventDefault();
    if(emailInput === adminEmail && passwordInput.length < 8 && passwordInput.length != 0  ) {
      window.location.href = "../pages/admin.html";
    } else {
      window.location.href = "../pages/user.html";
    }
  }

});


function checkInput() {
  if(document.getElementById('email').value != 0 && document.getElementById('password').value != 0) {
    btn.removeAttribute('disabled');
  } else {
    btn.setAttribute('disabled', 'disabled')
  }
}


