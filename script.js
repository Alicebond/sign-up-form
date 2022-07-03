"use strict";
function init () {
  let form = document.getElementsByTagName('form')[0];
  let btn = document.getElementById('create-account');
  let email = document.getElementById('email');
  let emailError = document.querySelector('.email-error')

  // console.log(emailError); 
  email.addEventListener('input', (e) => {
    if(email.validity.valid) {
      emailError.textContent = '';
      emailError.className = 'email-error';
    } else showEmailError();
  })

  form.addEventListener('submit', (e) => {
    if(!(email.validity.valid)){
      showEmailError();
      e.preventDefault();
    } else if (!checkPwd()) {
      showCfmError();
      e.preventDefault();
    } else if(!(pwdEl.validity.valid)) {
      showPwdError()
      e.preventDefault();
    }
  })

  function showEmailError() {
    email.classList.add('alert');
    if(email.validity.valueMissing) {
      emailError.textContent = 'You need to enter an e-mail address.';
    } else if (email.validity.typeMismatch) {
      emailError.textContent = 'Entered value need to be an e-mail address.'
    }
    emailError.className = 'email-error error active';
  }

  let pwdEl = document.getElementById('pwd');
  let pwdError = document.querySelector('.pwd-error')
  let cfmPwdEl = document.getElementById('cfm');
  let cfmError = document.querySelector('.cfm-error');

  cfmPwdEl.addEventListener('input', (e) => {
    if(checkPwd()){
      cfmError.textContent = '';
      cfmError.className = 'cfm-error';
    } else showCfmError()
  })

  pwdEl.addEventListener('input', (e) => {
    if(pwdEl.validity.valid) {
      pwdEl.className = 'pwd';
      pwdError.className = 'pwd-error';
    } else showPwdError();
  })

  function checkPwd() {
    let pwd = pwdEl.value;
    let secPwd = cfmPwdEl.value;
    if (!(pwd || secPwd)) return;
    for (let i = 0; i < pwd.length; i++) {
      if (pwd[i] === secPwd[i]) {
        return true
      };
    }
  }

  function showCfmError() {
    cfmError.classList.add('alert');
    if(cfmPwdEl.validity.valueMissing) {
      cfmError.textContent = 'Please re-enter your passwords';
    }
      cfmError.textContent = 'Passwords do not match';
      cfmError.className = 'cfm-error error active'
  }
    
  function showPwdError() {
    pwdEl.classList.add('alert')
    if(pwdEl.validity.valueMissing) {
      pwdError.textContent = 'Please enter your password';
    }
  }
  
}

init();

