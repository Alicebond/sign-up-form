"use strict";
function init () {
  let form = document.getElementsByTagName('form')[0];
  let email = document.getElementById('email');
  let emailError = document.querySelector('.email-error');
  let pwdEl = document.getElementById('pwd');
  let pwdError = document.querySelector('.pwd-error')
  let cfmPwdEl = document.getElementById('cfm');
  let cfmError = document.querySelector('.cfm-error');

  email.addEventListener('input', (e) => {
    if(email.validity.valid) {
      emailError.textContent = '';
      emailError.className = 'email-error';
      email.classList.remove('alert')
    } else showEmailError();
  })

  function showEmailError() {
    email.classList.add('alert');
    if(!email.value) {
      emailError.textContent = 'Please enter an e-mail address.';
    } else if (email.validity.typeMismatch) {
      emailError.textContent = 'Entered value need to be an e-mail address.'
    }
    emailError.className = 'email-error error active';
  }

  cfmPwdEl.addEventListener('input', (e) => {
    if(checkPwd()){
      cfmError.textContent = '';
      cfmError.className = '';
    } else showCfmError()
  });

  pwdEl.addEventListener('input', (e) => {
    if(pwdEl.validity.valid) {
      pwdEl.className = 'pwd';
      pwdError.className = '';
      pwdError.textContent = '';
    } else showPwdError();
  });

  form.addEventListener('submit', (e) => {
    if(!(email.validity.valid && email.value)){
      showEmailError();
      e.preventDefault();
    } ;
    if(!(pwdEl.validity.valid)) {
      showPwdError();
      e.preventDefault();
    };
    if (!checkPwd()) {
      showCfmError();
      e.preventDefault();
    };
  });

  function checkPwd() {
    let pwd = pwdEl.value;
    let secPwd = cfmPwdEl.value;
    if (!(pwd || secPwd)) return;
    for (let i = 0; i < secPwd.length; i++) {
       return pwd[i] === secPwd[i];
    };
  }

  function showCfmError() {
    cfmPwdEl.classList.add('alert');

    if(cfmPwdEl.validity.valueMissing) {
      cfmError.textContent = 'Please re-enter your passwords';
    }
      cfmError.textContent = 'Passwords do not match';
      cfmError.className = 'error active'
  }

  function showPwdError() {
    pwdEl.classList.add('alert');
    if(pwdEl.validity.valueMissing) {
      pwdError.textContent = 'Please enter your password';
      pwdError.className = 'error active'
      pwdEl.classsName = 'pwd alert';
    }
  }
  
}

init();

